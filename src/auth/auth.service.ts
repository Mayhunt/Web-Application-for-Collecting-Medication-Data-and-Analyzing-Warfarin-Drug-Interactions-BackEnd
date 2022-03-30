import {
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcryptjs from 'bcryptjs';
import { GenericConfig } from 'src/pkg/config/generic.config';
import { JwtConfig } from 'src/pkg/config/jwt.config';
import { UserEntity } from 'src/pkg/dal/user/user.entity';
import { UserRepository } from 'src/pkg/dal/user/user.repository';
import { JwtPayload } from 'src/pkg/interface/jwt-payload.interface';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @Inject(GenericConfig.KEY)
    private genericConfig: ConfigType<typeof GenericConfig>,
    @Inject(JwtConfig.KEY)
    private jwtConfig: ConfigType<typeof JwtConfig>,
    private jwtService: JwtService,
  ) {}

  public async register(dto: RegisterDto) {
    const hashedPassword = await bcryptjs.hash(
      dto.password,
      this.genericConfig.salt,
    );
    const newUser = this.userRepository.create();
    newUser.username = dto.username;
    newUser.password = hashedPassword;
    // mocking please rewrite this code
    newUser.birthDate = new Date();
    newUser.bloodGroup = 'A';
    newUser.bmi = 0;
    newUser.emergencyContact = '';
    newUser.emergencyPhoneNum = '0000000000';
    newUser.firstName = '';
    newUser.lastName = '';
    newUser.height = 0;
    newUser.idCardNumber = '0000000000000';
    newUser.medicationCondition = '';
    newUser.phoneNum = '';
    newUser.pic = '';
    newUser.weight = 0;
    const createUserResult = await this.userRepository
      .save(newUser)
      .catch((error) => {
        throw new InternalServerErrorException(error.message);
      });
    return createUserResult;
  }

  public async createSession(user: UserEntity) {
    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
    };

    const accessToken = await this.jwtService.sign(payload, {
      expiresIn: this.jwtConfig.life,
    });

    return {
      accessToken,
    };
  }

  public async validateUser(dto: SignInDto) {
    const user = await this.userRepository.findOne({ username: dto.username });
    if (!user) throw new UnauthorizedException('user_not_found');
    const isMatch = await bcryptjs.compare(dto.password, user.password);
    if (!isMatch)
      throw new UnauthorizedException('username_or_password_invalid');
    return user;
  }

  public async me(id: string) {
    const user = await this.userRepository.findOne({ id });
    return user;
  }
}

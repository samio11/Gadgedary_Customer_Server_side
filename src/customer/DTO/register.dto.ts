import { IsEmail, IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @Matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message: 'Invalid Password',
    },
  )
  password: string;

  @IsOptional()
  @Matches(/^(customer|admin|deliveryman|seller)$/, {
    message: 'Invalid Role',
  })
  role: string;
}

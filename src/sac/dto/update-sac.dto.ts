import { PartialType } from '@nestjs/swagger';
import { CreateSacDto } from './create-sac.dto';

export class UpdateSacDto extends PartialType(CreateSacDto) {}

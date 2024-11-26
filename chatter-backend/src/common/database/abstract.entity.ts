import { ObjectType, ID, Field } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types, SchemaTypes } from 'mongoose';

@Schema()
@ObjectType({ isAbstract: true })
export class AbstractEntity {
  @Prop({
    type: SchemaTypes.ObjectId,
  })
  @Field(() => ID)
  _id: Types.ObjectId;
}

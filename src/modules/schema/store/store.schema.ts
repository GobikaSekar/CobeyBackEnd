import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Store extends Document {
  @Prop({ required: true })
  storeUrl: string;

  @Prop({ required: true })
  consumerKey: string;

  @Prop({ required: true })
  consumerSecret: string;

  @Prop({ default: 'FAILED' })
  connectionStatus: 'CONNECTED' | 'FAILED';
}

export const StoreSchema = SchemaFactory.createForClass(Store);

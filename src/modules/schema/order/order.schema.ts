import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ unique: true, index: true })
  wooOrderId: number;

  @Prop()
  wooOrderNumber: string;

  @Prop()
  wooStatus: string;

  @Prop()
  customerName: string;

  @Prop()
  customerEmail: string;

  @Prop()
  paymentType: 'COD' | 'PREPAID';

  @Prop()
  shippingAddress: string;

  @Prop({ type: Array })
  lineItems: any[];

  @Prop({ default: 'PENDING' })
  fulfillmentStatus: 'PENDING' | 'FULFILLED' | 'FAILED';
}

export const OrderSchema = SchemaFactory.createForClass(Order);

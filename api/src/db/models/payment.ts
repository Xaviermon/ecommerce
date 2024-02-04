import { Model, Optional } from "sequelize";

interface PaymentAttributes {
  id?: number;
  currency?: string;
  status?: string;
  transationId?: string;
  createAt?: Date;
  updatedAt?: Date;
  OrderId?: number
}

export interface PaymentInput extends Optional<PaymentAttributes, "id"> {}
export interface PaymentOutput extends Required<PaymentAttributes> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class Payment
    extends Model<PaymentAttributes, PaymentInput>
    implements PaymentAttributes
  {
    public id!: number;
    public currency!: string;
    public status!: string;
    public transationId!: string;
    public readonly createAt!: Date;
    public readonly updatedAt!: Date;

    static assciate(models: any) {
      Payment.belongsTo(models.Order);
      Payment.hasMany(models.PaymentMethod)
    }
  }
  Payment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      currency: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      transationId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Payment",
    }
  );
  return Payment;
};

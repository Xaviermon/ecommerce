import { Model, Optional } from "sequelize";

interface PaymentMethodAttributes {
  id?: number;
  name?: string;

  createAt?: Date;
  updatedAt?: Date;
}

export interface PaymentMethodInput
  extends Optional<PaymentMethodAttributes, "id"> {}
export interface PaymentMethodOutput
  extends Required<PaymentMethodAttributes> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class PaymentMethod
    extends Model<PaymentMethodAttributes, PaymentMethodInput>
    implements PaymentMethodAttributes
  {
    public id!: number;
    public name!: string;
    public readonly createAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      PaymentMethod.belongsTo(models.Payment);
    }
  }

  PaymentMethod.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "PaymentMethod",
    }
  );
  return PaymentMethod;
};

import { Model, Optional } from "sequelize";
interface OrderProductAttributes {
  id: number;
  amount: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderProductInput
  extends Optional<OrderProductAttributes, "id"> {}
export interface OrderProductOutput extends Required<OrderProductAttributes> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class OrderProduct extends Model<OrderProductAttributes, OrderProductInput> {
    public id!: number;
    public amount!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  OrderProduct.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      amount: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "OrderProduct",
    }
  );
  return OrderProduct
};

import { Model, Optional } from "sequelize";

interface OrderAttributes {
  id?: number;
  date_order?: Date;
  total?: number;
  state?: string;
  createdAt?: Date;
  updatedAt?: Date;
  UserId?: number;
}

export interface OrderInput extends Optional<OrderAttributes, "id"> {}
export interface OrderOutput extends Required<OrderAttributes> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class Order
    extends Model<OrderAttributes, OrderInput>
    implements OrderAttributes
  {
    public id!: number;
    public date_order!: Date;
    public total!: number;
    public state!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      Order.hasMany(models.Payment)
      Order.belongsTo(models.User);
      Order.belongsToMany(models.Product, { through: models.OrderProduct });
    }
  }

  Order.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date_order: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      total: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Order",
    }
  );

  return Order;
};

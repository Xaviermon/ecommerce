import { Model, Optional } from "sequelize";

interface ProductAttributes {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  createdAt?: Date;
  updatedAt?: Date;
  CategoryId?: number;
  image?: string
}

export interface ProductInput extends Optional<ProductAttributes, "id"> {}
export interface ProductOutput extends Required<ProductAttributes> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class Product
    extends Model<ProductAttributes, ProductInput>
    implements ProductAttributes
  {
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public stock!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      Product.belongsTo(models.Category);
      Product.hasMany(models.Image);
      Product.belongsToMany(models.Order, { through: models.OrderProduct });
    }
  }

  Product.init(
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
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Product",
    }
  );
  return Product;
};

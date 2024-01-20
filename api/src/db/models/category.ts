import { Model, Optional } from "sequelize";

interface CategoryAttributes {
  id?: Number;
  name?: string;
  description?: string;

  createAt?: Date;
  updatedAt?: Date;
}

export interface CategoryInput extends Optional<CategoryAttributes, "id"> {}
export interface CategoryOutput extends Required<CategoryAttributes> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class Category
    extends Model<CategoryAttributes, CategoryInput>
    implements CategoryAttributes
  {
    public id!: Number;
    public name!: string;
    public description!: string;

    public readonly createAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      Category.hasMany(models.Product);
    }
  }

  Category.init(
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
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Category",
    }
  );
  return Category;
};

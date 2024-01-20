import { Model, Optional } from "sequelize";

interface ImageAttributes {
  id?: number;
  route?: string;

  createAt?: Date;
  updatedAt?: Date;
}

export interface ImageInput extends Optional<ImageAttributes, "id"> {}
export interface ImageOutput extends Required<ImageAttributes> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class Image
    extends Model<ImageAttributes, ImageInput>
    implements ImageAttributes
  {
    public id!: number;
    public route!: string;
    public readonly createAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      Image.belongsTo(models.Product);
    }
  }

  Image.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      route: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Image",
    }
  );
  return Image;
};

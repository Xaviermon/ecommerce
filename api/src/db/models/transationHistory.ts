import { Model, Optional } from "sequelize";

interface TransationHistoryAttributes {
  id?: number;
  description?: string;
  timestap?: string;
  createAt?: Date;
  updatedAt?: Date;
}

export interface TransationHistoryInput
  extends Optional<TransationHistoryAttributes, "id"> {}
export interface TransationHistoryOutput
  extends Required<TransationHistoryAttributes> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class TransationHistory
    extends Model<TransationHistoryAttributes, TransationHistoryInput>
    implements TransationHistoryAttributes
  {
    public id!: number;
    public description!: string;
    public timestap!: string;
    public readonly createAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      TransationHistory.belongsTo(models.User);
    }
  }

  TransationHistory.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      timestap: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "TransationHistory",
    }
  );
  return TransationHistory;
};

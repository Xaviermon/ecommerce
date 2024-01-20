import { Model, Optional } from "sequelize";

interface UserAttritutes {
  id?: number;
  name?: string;
  lastName?: string;
  email?: string;
  password: string;
  state?: "disable" | "enable";

  createAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserAttritutes, "id"> {}
export interface UserOutput extends Required<UserAttritutes> {}

module.exports = (sequelize: any, DataTypes: any) => {
  class User
    extends Model<UserAttritutes, UserInput>
    implements UserAttritutes
  {
    public id!: number;
    public name!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;

    public readonly createAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      User.hasMany(models.Order);
      User.hasMany(models.TransationHistory)
    }
  }

  User.init(
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
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: "enable"
      }
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "User",
    }
  );
  return User;
};

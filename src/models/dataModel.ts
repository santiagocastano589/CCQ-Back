import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';

export const Pabellon = sequelize.define('Pabellon',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
});

const Cama = sequelize.define('Cama',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    pabellon_num: {
        type: DataTypes.INTEGER,
        references:{
            model: Pabellon,
            key: 'id'
        },
    },
});

const Paciente = sequelize.define('Paciente',{
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
    },
    nombre:{
       type: DataTypes.STRING,
    },
});

const Ingreso = sequelize.define('Ingreso',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    fecha_de_ingreso:{
        type: DataTypes.DATE,
    },
    tipo_de_documento:{
        type: DataTypes.STRING,
    },
    documento:{
        type: DataTypes.INTEGER,
    },
    paciente:{
        type: DataTypes.INTEGER,
        references:{
            model: Paciente,
            key: 'id',
        },

    },
});


const Procedimiento = sequelize.define('Procedimento', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
    tipo_concepto:{
        type: DataTypes.INTEGER,
    },
});

const Orden = sequelize.define('Orden',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    fecha_orden:{
        type: DataTypes.DATE,
    },
    observaciones:{
        type: DataTypes.STRING,
    },
    ingreso:{
        type: DataTypes.INTEGER,
        references:{
            model: Ingreso,
            key: 'id,'
        },
    },
});



const TipoDeDocumento = sequelize.define('TipoDeDocumento',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
    },
    descripcion:{
        type: DataTypes.STRING,
    },
})

const Documento = sequelize.define('Documento',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    descripcion:{
        type: DataTypes.STRING
    },
    tipo_de_documento:{
        type: DataTypes.STRING,
        references:{
            model: TipoDeDocumento,
            key: 'id'
        }
    },
});

const TipoCocepto = sequelize.define('TipoConcepto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING,
    },
    descripcion:{
        type: DataTypes.STRING,
    },
});

const Cups = sequelize.define('Cups',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
});

const NombreProcedimiento = sequelize.define('NombreProcedimiento',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
    observaciones:{
        type: DataTypes.STRING,
    },
    cups:{
        type: DataTypes.INTEGER,
        references:{
          model: Cups,
          key:'id'  
        },
    },
});

const Fecha_orden = sequelize.define('Fecha_orden',{
    fechaOrden:{
        type: DataTypes.DATE,
    },
});


const observaciones = sequelize.define('observaciones',{
    id:{
        type: DataTypes.INTEGER,
    },
    descripcion:{
        type:DataTypes.STRING,
    },
});

module.exports = {
    Pabellon,
    Cama,
    Paciente,
    Ingreso,
    Procedimiento,
    Orden,
    TipoDeDocumento,
    sequelize,
};































// interface DataAttributes {
//   cedula: number;
// }


// class Data extends Model<DataAttributes> implements DataAttributes {
//   public cedula!: number;




//   static initModel(): void {
//     this.init(
//       {
//         cedula: {
//           type: DataTypes.STRING(15),
//           primaryKey: true,
//         },
//         nombre: {
//           type: DataTypes.STRING(30),
//           allowNull: false,
//         },
//         apellido: {
//           type: DataTypes.STRING(30),
//           allowNull: false,
//         },
//         correo: {
//           type: DataTypes.STRING(30),
//           allowNull: false,
//           unique: true,
//         },
//         contraseña: {
//           type: DataTypes.STRING(60),
//           allowNull: false,
//         },
//         direccion: {
//           type: DataTypes.STRING(20),
//           allowNull: true,
//         },
//         telefono: {
//           type: DataTypes.STRING(12),
//           allowNull: true,
//         },
//         estado: {
//           type: DataTypes.BOOLEAN,
//           defaultValue: true,
//           allowNull: true,
//         },
//         role: {
//           type: DataTypes.STRING,
//           defaultValue: 'User',
//           allowNull: true,
//         },
//         imagen: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//       },
    //   {
    //     sequelize,
    //     tableName: 'usuario',
    //     timestamps: false,
    //     underscored: true,
    //     hooks: {
    //       beforeCreate: async (user: Data) => {
    //         const salt = await bcrypt.genSalt(10);
    //         user.contraseña = await bcrypt.hash(user.contraseña, salt);
    //       },
    //     },
    //   }
//     );
//   }
// }

// export default Data;
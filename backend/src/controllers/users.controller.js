import { pool } from "../database/conexion.js";

// export const getUsers = async (req, res) => {
//     try {
//         const [ result ] = await pool.query('SELECT * FROM users');
//         if (result.length > 0) {
//             return res.status(200).json(result);
//         }
//         return res.status(404).json({ message: 'No se encontraron usuarios' });
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// }

export const setUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const [ result ] = await pool.query('INSERT INTO users(fullname, email, password) VALUES (?, ?, ?)', [fullname, email, password]);

        if (result.affectedRows > 0) {
            return res.status(201).json({ message: 'Usuario creado con éxito' });
        }
        return res.status(400).json({ message: 'No se pudo crear el usuario' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// export const getUserById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const [ result ] = await pool.query('SELECT * FROM users WHERE idUsuario=?', [id]);

//         if (result.length > 0) {
//             return res.status(200).json(result[0]);
//         }
//         return res.status(404).json({ message: 'Usuario no encontrado' });
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// }

// export const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { fullname, email, password } = req.body;
//         const [ result ] = await pool.query('UPDATE users SET fullname=?, email=?, password=? WHERE idUsuario=?', [fullname, email, password, id]);

//         if (result.affectedRows > 0) {
//             return res.status(200).json({ message: 'Usuario actualizado con éxito' });
//         }
//         return res.status(400).json({ message: 'No se pudo actualizar el usuario' });
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// }

// export const deleteUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const [ result ] = await pool.query('DELETE FROM users WHERE idUsuario=?', [id]);

//         if (result.affectedRows > 0) {
//             return res.status(200).json({ message: 'Usuario eliminado con éxito' });
//         }
//         return res.status(400).json({ message: 'No se pudo eliminar el usuario' });
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// }
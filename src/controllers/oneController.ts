import {Response, Request} from 'express'
import {Pabellon} from "../models/dataModel";


export const getData = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await Pabellon.findAll();
      res.status(200).json(users); 
    } catch (error: any) {
      console.error('Error fetching users: ', error);
      res.status(500).json({ message: 'Error fetching users.' });      
    }
  };
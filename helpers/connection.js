
import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
  host: 'monorail.proxy.rlwy.net',
  user: 'railway',
  database: 'm2_dannnikoleardilafuentes',
  port: 57265,
  password: 'hHFAaXmhXvtUycndbxSTQwmAlTrMfZXs'
});
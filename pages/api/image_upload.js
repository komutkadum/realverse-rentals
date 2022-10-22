import multer from 'multer';
import nextConnect from 'next-connect';

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'kadmon',
  api_key: '946788233182825',
  api_secret: 'wxowpDh5hYDtfG3LdJ0f6lj-Xso',
});

nextConnect;
multer;

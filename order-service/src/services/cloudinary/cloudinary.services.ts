import { v2 as cloudinary } from 'cloudinary';

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// req.files.file.path
export const uploadFile = async (file: string): Promise<void | any> => {
  try {
    return await cloudinary.uploader.upload(file, {
      public_id: `${Date.now()}`,
      resource_type: 'auto', // jpeg, png
    });
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

export const uploadStream = async (file: string): Promise<void | any> => {
  try {
    return await cloudinary.uploader.upload(file, {
      public_id: `${Date.now()}`,
      resource_type: 'auto', // jpeg, png
    });
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

// eslint-disable-next-line no-unused-vars
export const removeFile = (
  imageId: string,
  cb: (err?: any, callResult?: any) => any
): void => {
  cloudinary.uploader.destroy(imageId, (err, result) => {
    if (err) return cb(err, null);
    return cb(null, result);
  });
};

import { diskStorage } from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';


export const multerOptions = {

    storage: diskStorage({
        destination: (request, file, callback) => {
            const uploadPath = './uploads';
            if (!existsSync(uploadPath)) {
                mkdirSync(uploadPath);
            }
            callback(null, uploadPath);
        },
        filename: (request, file, callback) => {
            callback(null, `${Date.now()}${extname(file.originalname)}`);

        },
    }),
    limits: {
        fieldNameSize: 1000, // 필드명 최대값 입니다. (기본값 100bytes)
        filedSize: 1024 * 1024, // 필드 사이즈 값 설정 (기본값 1MB)
    },
};

export const uploadFileURL = (fileName): string =>
    `http://localhost:3005/files/${fileName}`;
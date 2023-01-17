import { Injectable } from '@nestjs/common';
import {uploadFileURL} from "../common/utils/multer.options";

@Injectable()
export class FileService {
    public uploadFiles(files: File[]): string[] {
        return files.map((file: any) => {
            return uploadFileURL(file.filename);
        });
    }
}

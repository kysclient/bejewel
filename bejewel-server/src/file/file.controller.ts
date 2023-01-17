import {
    Bind,
    Controller,
    Get,
    HttpStatus,
    Logger,
    Param,
    Post,
    Res,
    UploadedFiles,
    UseInterceptors
} from '@nestjs/common';
import {FileService} from "./file.service";
import {AnyFilesInterceptor, FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {multerOptions} from "../common/utils/multer.options";

@Controller('files')
export class FileController {
    constructor(private readonly fileService: FileService) {
    }
    @Post("upload")
    @UseInterceptors(FilesInterceptor("files", 10, multerOptions))
    uploadFileDisk(@UploadedFiles() files: File[]) {
            return {
                success: true,
                data: this.fileService.uploadFiles(files)
            };
    }

    @Get("/:path")
    seeUploadedFile(@Param("path") image, @Res() res) {
        return res.sendFile(image, { root: "./uploads" });
    }

}

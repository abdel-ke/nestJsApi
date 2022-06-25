import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { BookmarkModule } from 'src/bookmark/bookmark.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [AuthModule, BookmarkModule, UserModule,PrismaModule]
})
export class AppModule {}

import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from './auth.module';

describe('AuthService', () => {
  let app: INestApplication;
  let service: AuthService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AuthModule],
    })
      .overrideProvider(AuthService)
      .useValue(AuthService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('Should return valid JWT token when user exists', async (done) => {
    const response = await request(app.getHttpServer()).get('/auth/login');

    expect(response.body).toEqual('truc');

    done();
  });
});

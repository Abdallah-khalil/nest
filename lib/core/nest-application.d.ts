import { CanActivate, ExceptionFilter, NestInterceptor, PipeTransform, WebSocketAdapter } from '@nestjs/common';
import { INestApplication, INestMicroservice } from '@nestjs/common';
import { MicroserviceConfiguration } from '@nestjs/common/interfaces/microservices/microservice-configuration.interface';
import { NestContainer } from './injector/container';
export declare class NestApplication implements INestApplication {
    private readonly container;
    private readonly express;
    private readonly logger;
    private readonly middlewaresModule;
    private readonly middlewaresContainer;
    private readonly microservicesModule;
    private readonly socketModule;
    private readonly httpServer;
    private readonly routesResolver;
    private readonly config;
    private readonly microservices;
    private isInitialized;
    constructor(container: NestContainer, express: any);
    setupParserMiddlewares(): void;
    setupModules(): Promise<void>;
    init(): Promise<void>;
    setupRouter(): Promise<void>;
    connectMicroservice(config: MicroserviceConfiguration): INestMicroservice;
    getMicroservices(): INestMicroservice[];
    startAllMicroservices(callback?: () => void): void;
    startAllMicroservicesAsync(): Promise<void>;
    use(...args: any[]): void;
    listen(port: number, callback?: () => void): any;
    listen(port: number, hostname: string, callback?: () => void): any;
    listenAsync(port: number, hostname?: string): Promise<any>;
    close(): void;
    setGlobalPrefix(prefix: string): void;
    useWebSocketAdapter(adapter: WebSocketAdapter): void;
    useGlobalFilters(...filters: ExceptionFilter[]): void;
    useGlobalPipes(...pipes: PipeTransform<any>[]): void;
    useGlobalInterceptors(...interceptors: NestInterceptor[]): void;
    useGlobalGuards(...guards: CanActivate[]): void;
    private setupMiddlewares(instance);
    private listenToPromise(microservice);
    private callInitHook();
    private callModuleInitHook(module);
    private hasOnModuleInitHook(instance);
    private callDestroyHook();
    private callModuleDestroyHook(module);
    private hasOnModuleDestroyHook(instance);
}


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model MenuGroup
 * 
 */
export type MenuGroup = $Result.DefaultSelection<Prisma.$MenuGroupPayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model AccessLevel
 * 
 */
export type AccessLevel = $Result.DefaultSelection<Prisma.$AccessLevelPayload>
/**
 * Model MenuAccessLevel
 * 
 */
export type MenuAccessLevel = $Result.DefaultSelection<Prisma.$MenuAccessLevelPayload>
/**
 * Model MenuGroupAccess
 * 
 */
export type MenuGroupAccess = $Result.DefaultSelection<Prisma.$MenuGroupAccessPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuGroup`: Exposes CRUD operations for the **MenuGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuGroups
    * const menuGroups = await prisma.menuGroup.findMany()
    * ```
    */
  get menuGroup(): Prisma.MenuGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessLevel`: Exposes CRUD operations for the **AccessLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessLevels
    * const accessLevels = await prisma.accessLevel.findMany()
    * ```
    */
  get accessLevel(): Prisma.AccessLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuAccessLevel`: Exposes CRUD operations for the **MenuAccessLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuAccessLevels
    * const menuAccessLevels = await prisma.menuAccessLevel.findMany()
    * ```
    */
  get menuAccessLevel(): Prisma.MenuAccessLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuGroupAccess`: Exposes CRUD operations for the **MenuGroupAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuGroupAccesses
    * const menuGroupAccesses = await prisma.menuGroupAccess.findMany()
    * ```
    */
  get menuGroupAccess(): Prisma.MenuGroupAccessDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Group: 'Group',
    Profile: 'Profile',
    MenuGroup: 'MenuGroup',
    Menu: 'Menu',
    AccessLevel: 'AccessLevel',
    MenuAccessLevel: 'MenuAccessLevel',
    MenuGroupAccess: 'MenuGroupAccess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "group" | "profile" | "menuGroup" | "menu" | "accessLevel" | "menuAccessLevel" | "menuGroupAccess"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      MenuGroup: {
        payload: Prisma.$MenuGroupPayload<ExtArgs>
        fields: Prisma.MenuGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload>
          }
          findFirst: {
            args: Prisma.MenuGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload>
          }
          findMany: {
            args: Prisma.MenuGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload>[]
          }
          create: {
            args: Prisma.MenuGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload>
          }
          createMany: {
            args: Prisma.MenuGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload>[]
          }
          delete: {
            args: Prisma.MenuGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload>
          }
          update: {
            args: Prisma.MenuGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload>
          }
          deleteMany: {
            args: Prisma.MenuGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload>[]
          }
          upsert: {
            args: Prisma.MenuGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupPayload>
          }
          aggregate: {
            args: Prisma.MenuGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuGroup>
          }
          groupBy: {
            args: Prisma.MenuGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuGroupCountArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      AccessLevel: {
        payload: Prisma.$AccessLevelPayload<ExtArgs>
        fields: Prisma.AccessLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload>
          }
          findFirst: {
            args: Prisma.AccessLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload>
          }
          findMany: {
            args: Prisma.AccessLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload>[]
          }
          create: {
            args: Prisma.AccessLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload>
          }
          createMany: {
            args: Prisma.AccessLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload>[]
          }
          delete: {
            args: Prisma.AccessLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload>
          }
          update: {
            args: Prisma.AccessLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload>
          }
          deleteMany: {
            args: Prisma.AccessLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload>[]
          }
          upsert: {
            args: Prisma.AccessLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLevelPayload>
          }
          aggregate: {
            args: Prisma.AccessLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessLevel>
          }
          groupBy: {
            args: Prisma.AccessLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessLevelCountArgs<ExtArgs>
            result: $Utils.Optional<AccessLevelCountAggregateOutputType> | number
          }
        }
      }
      MenuAccessLevel: {
        payload: Prisma.$MenuAccessLevelPayload<ExtArgs>
        fields: Prisma.MenuAccessLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuAccessLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuAccessLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload>
          }
          findFirst: {
            args: Prisma.MenuAccessLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuAccessLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload>
          }
          findMany: {
            args: Prisma.MenuAccessLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload>[]
          }
          create: {
            args: Prisma.MenuAccessLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload>
          }
          createMany: {
            args: Prisma.MenuAccessLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuAccessLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload>[]
          }
          delete: {
            args: Prisma.MenuAccessLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload>
          }
          update: {
            args: Prisma.MenuAccessLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload>
          }
          deleteMany: {
            args: Prisma.MenuAccessLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuAccessLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuAccessLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload>[]
          }
          upsert: {
            args: Prisma.MenuAccessLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuAccessLevelPayload>
          }
          aggregate: {
            args: Prisma.MenuAccessLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuAccessLevel>
          }
          groupBy: {
            args: Prisma.MenuAccessLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuAccessLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuAccessLevelCountArgs<ExtArgs>
            result: $Utils.Optional<MenuAccessLevelCountAggregateOutputType> | number
          }
        }
      }
      MenuGroupAccess: {
        payload: Prisma.$MenuGroupAccessPayload<ExtArgs>
        fields: Prisma.MenuGroupAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuGroupAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuGroupAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload>
          }
          findFirst: {
            args: Prisma.MenuGroupAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuGroupAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload>
          }
          findMany: {
            args: Prisma.MenuGroupAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload>[]
          }
          create: {
            args: Prisma.MenuGroupAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload>
          }
          createMany: {
            args: Prisma.MenuGroupAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuGroupAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload>[]
          }
          delete: {
            args: Prisma.MenuGroupAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload>
          }
          update: {
            args: Prisma.MenuGroupAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload>
          }
          deleteMany: {
            args: Prisma.MenuGroupAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuGroupAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuGroupAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload>[]
          }
          upsert: {
            args: Prisma.MenuGroupAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuGroupAccessPayload>
          }
          aggregate: {
            args: Prisma.MenuGroupAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuGroupAccess>
          }
          groupBy: {
            args: Prisma.MenuGroupAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuGroupAccessCountArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupAccessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    group?: GroupOmit
    profile?: ProfileOmit
    menuGroup?: MenuGroupOmit
    menu?: MenuOmit
    accessLevel?: AccessLevelOmit
    menuAccessLevel?: MenuAccessLevelOmit
    menuGroupAccess?: MenuGroupAccessOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    users: number
    menus: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GroupCountOutputTypeCountUsersArgs
    menus?: boolean | GroupCountOutputTypeCountMenusArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuGroupWhereInput
  }


  /**
   * Count Type MenuGroupCountOutputType
   */

  export type MenuGroupCountOutputType = {
    access: number
  }

  export type MenuGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access?: boolean | MenuGroupCountOutputTypeCountAccessArgs
  }

  // Custom InputTypes
  /**
   * MenuGroupCountOutputType without action
   */
  export type MenuGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupCountOutputType
     */
    select?: MenuGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuGroupCountOutputType without action
   */
  export type MenuGroupCountOutputTypeCountAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuGroupAccessWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    children: number
    acls: number
    groups: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | MenuCountOutputTypeCountChildrenArgs
    acls?: boolean | MenuCountOutputTypeCountAclsArgs
    groups?: boolean | MenuCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountAclsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuAccessLevelWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuGroupWhereInput
  }


  /**
   * Count Type AccessLevelCountOutputType
   */

  export type AccessLevelCountOutputType = {
    menus: number
    groupAccess: number
  }

  export type AccessLevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menus?: boolean | AccessLevelCountOutputTypeCountMenusArgs
    groupAccess?: boolean | AccessLevelCountOutputTypeCountGroupAccessArgs
  }

  // Custom InputTypes
  /**
   * AccessLevelCountOutputType without action
   */
  export type AccessLevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevelCountOutputType
     */
    select?: AccessLevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccessLevelCountOutputType without action
   */
  export type AccessLevelCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuAccessLevelWhereInput
  }

  /**
   * AccessLevelCountOutputType without action
   */
  export type AccessLevelCountOutputTypeCountGroupAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuGroupAccessWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    email: string | null
    password: string | null
    groupId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    email: string | null
    password: string | null
    groupId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    uuid: number
    email: number
    password: number
    groupId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    uuid?: true
    email?: true
    password?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    uuid?: true
    email?: true
    password?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    uuid?: true
    email?: true
    password?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    uuid: string
    email: string
    password: string
    groupId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    email?: boolean
    password?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    email?: boolean
    password?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    email?: boolean
    password?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    uuid?: boolean
    email?: boolean
    password?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "email" | "password" | "groupId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      email: string
      password: string
      groupId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly uuid: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly groupId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deletedBy: string | null
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    users?: boolean | Group$usersArgs<ExtArgs>
    menus?: boolean | Group$menusArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Group$usersArgs<ExtArgs>
    menus?: boolean | Group$menusArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      menus: Prisma.$MenuGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deletedBy: string | null
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Group$usersArgs<ExtArgs> = {}>(args?: Subset<T, Group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menus<T extends Group$menusArgs<ExtArgs> = {}>(args?: Subset<T, Group$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
    readonly deletedAt: FieldRef<"Group", 'DateTime'>
    readonly deletedBy: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.users
   */
  export type Group$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Group.menus
   */
  export type Group$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    where?: MenuGroupWhereInput
    orderBy?: MenuGroupOrderByWithRelationInput | MenuGroupOrderByWithRelationInput[]
    cursor?: MenuGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuGroupScalarFieldEnum | MenuGroupScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    emailSecondary: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    emailSecondary: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    emailSecondary: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    emailSecondary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    emailSecondary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    emailSecondary?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    firstName: string | null
    lastName: string | null
    phone: string | null
    emailSecondary: string | null
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    emailSecondary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    emailSecondary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    emailSecondary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    emailSecondary?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phone" | "emailSecondary" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string | null
      lastName: string | null
      phone: string | null
      emailSecondary: string | null
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly emailSecondary: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model MenuGroup
   */

  export type AggregateMenuGroup = {
    _count: MenuGroupCountAggregateOutputType | null
    _avg: MenuGroupAvgAggregateOutputType | null
    _sum: MenuGroupSumAggregateOutputType | null
    _min: MenuGroupMinAggregateOutputType | null
    _max: MenuGroupMaxAggregateOutputType | null
  }

  export type MenuGroupAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
    menuId: number | null
    orderNumber: number | null
  }

  export type MenuGroupSumAggregateOutputType = {
    id: number | null
    groupId: number | null
    menuId: number | null
    orderNumber: number | null
  }

  export type MenuGroupMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    menuId: number | null
    isActive: boolean | null
    orderNumber: number | null
  }

  export type MenuGroupMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    menuId: number | null
    isActive: boolean | null
    orderNumber: number | null
  }

  export type MenuGroupCountAggregateOutputType = {
    id: number
    groupId: number
    menuId: number
    isActive: number
    orderNumber: number
    _all: number
  }


  export type MenuGroupAvgAggregateInputType = {
    id?: true
    groupId?: true
    menuId?: true
    orderNumber?: true
  }

  export type MenuGroupSumAggregateInputType = {
    id?: true
    groupId?: true
    menuId?: true
    orderNumber?: true
  }

  export type MenuGroupMinAggregateInputType = {
    id?: true
    groupId?: true
    menuId?: true
    isActive?: true
    orderNumber?: true
  }

  export type MenuGroupMaxAggregateInputType = {
    id?: true
    groupId?: true
    menuId?: true
    isActive?: true
    orderNumber?: true
  }

  export type MenuGroupCountAggregateInputType = {
    id?: true
    groupId?: true
    menuId?: true
    isActive?: true
    orderNumber?: true
    _all?: true
  }

  export type MenuGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuGroup to aggregate.
     */
    where?: MenuGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuGroups to fetch.
     */
    orderBy?: MenuGroupOrderByWithRelationInput | MenuGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuGroups
    **/
    _count?: true | MenuGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuGroupMaxAggregateInputType
  }

  export type GetMenuGroupAggregateType<T extends MenuGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuGroup[P]>
      : GetScalarType<T[P], AggregateMenuGroup[P]>
  }




  export type MenuGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuGroupWhereInput
    orderBy?: MenuGroupOrderByWithAggregationInput | MenuGroupOrderByWithAggregationInput[]
    by: MenuGroupScalarFieldEnum[] | MenuGroupScalarFieldEnum
    having?: MenuGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuGroupCountAggregateInputType | true
    _avg?: MenuGroupAvgAggregateInputType
    _sum?: MenuGroupSumAggregateInputType
    _min?: MenuGroupMinAggregateInputType
    _max?: MenuGroupMaxAggregateInputType
  }

  export type MenuGroupGroupByOutputType = {
    id: number
    groupId: number
    menuId: number
    isActive: boolean
    orderNumber: number
    _count: MenuGroupCountAggregateOutputType | null
    _avg: MenuGroupAvgAggregateOutputType | null
    _sum: MenuGroupSumAggregateOutputType | null
    _min: MenuGroupMinAggregateOutputType | null
    _max: MenuGroupMaxAggregateOutputType | null
  }

  type GetMenuGroupGroupByPayload<T extends MenuGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupGroupByOutputType[P]>
        }
      >
    >


  export type MenuGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    menuId?: boolean
    isActive?: boolean
    orderNumber?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    access?: boolean | MenuGroup$accessArgs<ExtArgs>
    _count?: boolean | MenuGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuGroup"]>

  export type MenuGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    menuId?: boolean
    isActive?: boolean
    orderNumber?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuGroup"]>

  export type MenuGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    menuId?: boolean
    isActive?: boolean
    orderNumber?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuGroup"]>

  export type MenuGroupSelectScalar = {
    id?: boolean
    groupId?: boolean
    menuId?: boolean
    isActive?: boolean
    orderNumber?: boolean
  }

  export type MenuGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "menuId" | "isActive" | "orderNumber", ExtArgs["result"]["menuGroup"]>
  export type MenuGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    access?: boolean | MenuGroup$accessArgs<ExtArgs>
    _count?: boolean | MenuGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type MenuGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $MenuGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuGroup"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      menu: Prisma.$MenuPayload<ExtArgs>
      access: Prisma.$MenuGroupAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number
      menuId: number
      isActive: boolean
      orderNumber: number
    }, ExtArgs["result"]["menuGroup"]>
    composites: {}
  }

  type MenuGroupGetPayload<S extends boolean | null | undefined | MenuGroupDefaultArgs> = $Result.GetResult<Prisma.$MenuGroupPayload, S>

  type MenuGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuGroupCountAggregateInputType | true
    }

  export interface MenuGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuGroup'], meta: { name: 'MenuGroup' } }
    /**
     * Find zero or one MenuGroup that matches the filter.
     * @param {MenuGroupFindUniqueArgs} args - Arguments to find a MenuGroup
     * @example
     * // Get one MenuGroup
     * const menuGroup = await prisma.menuGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuGroupFindUniqueArgs>(args: SelectSubset<T, MenuGroupFindUniqueArgs<ExtArgs>>): Prisma__MenuGroupClient<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuGroupFindUniqueOrThrowArgs} args - Arguments to find a MenuGroup
     * @example
     * // Get one MenuGroup
     * const menuGroup = await prisma.menuGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuGroupClient<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupFindFirstArgs} args - Arguments to find a MenuGroup
     * @example
     * // Get one MenuGroup
     * const menuGroup = await prisma.menuGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuGroupFindFirstArgs>(args?: SelectSubset<T, MenuGroupFindFirstArgs<ExtArgs>>): Prisma__MenuGroupClient<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupFindFirstOrThrowArgs} args - Arguments to find a MenuGroup
     * @example
     * // Get one MenuGroup
     * const menuGroup = await prisma.menuGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuGroupClient<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuGroups
     * const menuGroups = await prisma.menuGroup.findMany()
     * 
     * // Get first 10 MenuGroups
     * const menuGroups = await prisma.menuGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuGroupWithIdOnly = await prisma.menuGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuGroupFindManyArgs>(args?: SelectSubset<T, MenuGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuGroup.
     * @param {MenuGroupCreateArgs} args - Arguments to create a MenuGroup.
     * @example
     * // Create one MenuGroup
     * const MenuGroup = await prisma.menuGroup.create({
     *   data: {
     *     // ... data to create a MenuGroup
     *   }
     * })
     * 
     */
    create<T extends MenuGroupCreateArgs>(args: SelectSubset<T, MenuGroupCreateArgs<ExtArgs>>): Prisma__MenuGroupClient<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuGroups.
     * @param {MenuGroupCreateManyArgs} args - Arguments to create many MenuGroups.
     * @example
     * // Create many MenuGroups
     * const menuGroup = await prisma.menuGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuGroupCreateManyArgs>(args?: SelectSubset<T, MenuGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuGroups and returns the data saved in the database.
     * @param {MenuGroupCreateManyAndReturnArgs} args - Arguments to create many MenuGroups.
     * @example
     * // Create many MenuGroups
     * const menuGroup = await prisma.menuGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuGroups and only return the `id`
     * const menuGroupWithIdOnly = await prisma.menuGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuGroup.
     * @param {MenuGroupDeleteArgs} args - Arguments to delete one MenuGroup.
     * @example
     * // Delete one MenuGroup
     * const MenuGroup = await prisma.menuGroup.delete({
     *   where: {
     *     // ... filter to delete one MenuGroup
     *   }
     * })
     * 
     */
    delete<T extends MenuGroupDeleteArgs>(args: SelectSubset<T, MenuGroupDeleteArgs<ExtArgs>>): Prisma__MenuGroupClient<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuGroup.
     * @param {MenuGroupUpdateArgs} args - Arguments to update one MenuGroup.
     * @example
     * // Update one MenuGroup
     * const menuGroup = await prisma.menuGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuGroupUpdateArgs>(args: SelectSubset<T, MenuGroupUpdateArgs<ExtArgs>>): Prisma__MenuGroupClient<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuGroups.
     * @param {MenuGroupDeleteManyArgs} args - Arguments to filter MenuGroups to delete.
     * @example
     * // Delete a few MenuGroups
     * const { count } = await prisma.menuGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuGroupDeleteManyArgs>(args?: SelectSubset<T, MenuGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuGroups
     * const menuGroup = await prisma.menuGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuGroupUpdateManyArgs>(args: SelectSubset<T, MenuGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuGroups and returns the data updated in the database.
     * @param {MenuGroupUpdateManyAndReturnArgs} args - Arguments to update many MenuGroups.
     * @example
     * // Update many MenuGroups
     * const menuGroup = await prisma.menuGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuGroups and only return the `id`
     * const menuGroupWithIdOnly = await prisma.menuGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuGroup.
     * @param {MenuGroupUpsertArgs} args - Arguments to update or create a MenuGroup.
     * @example
     * // Update or create a MenuGroup
     * const menuGroup = await prisma.menuGroup.upsert({
     *   create: {
     *     // ... data to create a MenuGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuGroup we want to update
     *   }
     * })
     */
    upsert<T extends MenuGroupUpsertArgs>(args: SelectSubset<T, MenuGroupUpsertArgs<ExtArgs>>): Prisma__MenuGroupClient<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupCountArgs} args - Arguments to filter MenuGroups to count.
     * @example
     * // Count the number of MenuGroups
     * const count = await prisma.menuGroup.count({
     *   where: {
     *     // ... the filter for the MenuGroups we want to count
     *   }
     * })
    **/
    count<T extends MenuGroupCountArgs>(
      args?: Subset<T, MenuGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuGroupAggregateArgs>(args: Subset<T, MenuGroupAggregateArgs>): Prisma.PrismaPromise<GetMenuGroupAggregateType<T>>

    /**
     * Group by MenuGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuGroup model
   */
  readonly fields: MenuGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    access<T extends MenuGroup$accessArgs<ExtArgs> = {}>(args?: Subset<T, MenuGroup$accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuGroup model
   */
  interface MenuGroupFieldRefs {
    readonly id: FieldRef<"MenuGroup", 'Int'>
    readonly groupId: FieldRef<"MenuGroup", 'Int'>
    readonly menuId: FieldRef<"MenuGroup", 'Int'>
    readonly isActive: FieldRef<"MenuGroup", 'Boolean'>
    readonly orderNumber: FieldRef<"MenuGroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MenuGroup findUnique
   */
  export type MenuGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroup to fetch.
     */
    where: MenuGroupWhereUniqueInput
  }

  /**
   * MenuGroup findUniqueOrThrow
   */
  export type MenuGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroup to fetch.
     */
    where: MenuGroupWhereUniqueInput
  }

  /**
   * MenuGroup findFirst
   */
  export type MenuGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroup to fetch.
     */
    where?: MenuGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuGroups to fetch.
     */
    orderBy?: MenuGroupOrderByWithRelationInput | MenuGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuGroups.
     */
    cursor?: MenuGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuGroups.
     */
    distinct?: MenuGroupScalarFieldEnum | MenuGroupScalarFieldEnum[]
  }

  /**
   * MenuGroup findFirstOrThrow
   */
  export type MenuGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroup to fetch.
     */
    where?: MenuGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuGroups to fetch.
     */
    orderBy?: MenuGroupOrderByWithRelationInput | MenuGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuGroups.
     */
    cursor?: MenuGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuGroups.
     */
    distinct?: MenuGroupScalarFieldEnum | MenuGroupScalarFieldEnum[]
  }

  /**
   * MenuGroup findMany
   */
  export type MenuGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroups to fetch.
     */
    where?: MenuGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuGroups to fetch.
     */
    orderBy?: MenuGroupOrderByWithRelationInput | MenuGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuGroups.
     */
    cursor?: MenuGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuGroups.
     */
    skip?: number
    distinct?: MenuGroupScalarFieldEnum | MenuGroupScalarFieldEnum[]
  }

  /**
   * MenuGroup create
   */
  export type MenuGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuGroup.
     */
    data: XOR<MenuGroupCreateInput, MenuGroupUncheckedCreateInput>
  }

  /**
   * MenuGroup createMany
   */
  export type MenuGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuGroups.
     */
    data: MenuGroupCreateManyInput | MenuGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuGroup createManyAndReturn
   */
  export type MenuGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * The data used to create many MenuGroups.
     */
    data: MenuGroupCreateManyInput | MenuGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuGroup update
   */
  export type MenuGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuGroup.
     */
    data: XOR<MenuGroupUpdateInput, MenuGroupUncheckedUpdateInput>
    /**
     * Choose, which MenuGroup to update.
     */
    where: MenuGroupWhereUniqueInput
  }

  /**
   * MenuGroup updateMany
   */
  export type MenuGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuGroups.
     */
    data: XOR<MenuGroupUpdateManyMutationInput, MenuGroupUncheckedUpdateManyInput>
    /**
     * Filter which MenuGroups to update
     */
    where?: MenuGroupWhereInput
    /**
     * Limit how many MenuGroups to update.
     */
    limit?: number
  }

  /**
   * MenuGroup updateManyAndReturn
   */
  export type MenuGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * The data used to update MenuGroups.
     */
    data: XOR<MenuGroupUpdateManyMutationInput, MenuGroupUncheckedUpdateManyInput>
    /**
     * Filter which MenuGroups to update
     */
    where?: MenuGroupWhereInput
    /**
     * Limit how many MenuGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuGroup upsert
   */
  export type MenuGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuGroup to update in case it exists.
     */
    where: MenuGroupWhereUniqueInput
    /**
     * In case the MenuGroup found by the `where` argument doesn't exist, create a new MenuGroup with this data.
     */
    create: XOR<MenuGroupCreateInput, MenuGroupUncheckedCreateInput>
    /**
     * In case the MenuGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuGroupUpdateInput, MenuGroupUncheckedUpdateInput>
  }

  /**
   * MenuGroup delete
   */
  export type MenuGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    /**
     * Filter which MenuGroup to delete.
     */
    where: MenuGroupWhereUniqueInput
  }

  /**
   * MenuGroup deleteMany
   */
  export type MenuGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuGroups to delete
     */
    where?: MenuGroupWhereInput
    /**
     * Limit how many MenuGroups to delete.
     */
    limit?: number
  }

  /**
   * MenuGroup.access
   */
  export type MenuGroup$accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    where?: MenuGroupAccessWhereInput
    orderBy?: MenuGroupAccessOrderByWithRelationInput | MenuGroupAccessOrderByWithRelationInput[]
    cursor?: MenuGroupAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuGroupAccessScalarFieldEnum | MenuGroupAccessScalarFieldEnum[]
  }

  /**
   * MenuGroup without action
   */
  export type MenuGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    parentId: number | null
    description: string | null
    name: string | null
    label: string | null
    icon: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    parentId: number | null
    description: string | null
    name: string | null
    label: string | null
    icon: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    parentId: number
    description: number
    name: number
    label: number
    icon: number
    path: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    parentId?: true
    description?: true
    name?: true
    label?: true
    icon?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    parentId?: true
    description?: true
    name?: true
    label?: true
    icon?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    parentId?: true
    description?: true
    name?: true
    label?: true
    icon?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    parentId: number | null
    description: string | null
    name: string
    label: string
    icon: string | null
    path: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deletedBy: string | null
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    description?: boolean
    name?: boolean
    label?: boolean
    icon?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    parent?: boolean | Menu$parentArgs<ExtArgs>
    children?: boolean | Menu$childrenArgs<ExtArgs>
    acls?: boolean | Menu$aclsArgs<ExtArgs>
    groups?: boolean | Menu$groupsArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    description?: boolean
    name?: boolean
    label?: boolean
    icon?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    parent?: boolean | Menu$parentArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    description?: boolean
    name?: boolean
    label?: boolean
    icon?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    parent?: boolean | Menu$parentArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    id?: boolean
    parentId?: boolean
    description?: boolean
    name?: boolean
    label?: boolean
    icon?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type MenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentId" | "description" | "name" | "label" | "icon" | "path" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy", ExtArgs["result"]["menu"]>
  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Menu$parentArgs<ExtArgs>
    children?: boolean | Menu$childrenArgs<ExtArgs>
    acls?: boolean | Menu$aclsArgs<ExtArgs>
    groups?: boolean | Menu$groupsArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Menu$parentArgs<ExtArgs>
  }
  export type MenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Menu$parentArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      parent: Prisma.$MenuPayload<ExtArgs> | null
      children: Prisma.$MenuPayload<ExtArgs>[]
      acls: Prisma.$MenuAccessLevelPayload<ExtArgs>[]
      groups: Prisma.$MenuGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parentId: number | null
      description: string | null
      name: string
      label: string
      icon: string | null
      path: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deletedBy: string | null
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {MenuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Menu$parentArgs<ExtArgs> = {}>(args?: Subset<T, Menu$parentArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Menu$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Menu$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acls<T extends Menu$aclsArgs<ExtArgs> = {}>(args?: Subset<T, Menu$aclsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Menu$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Menu$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Menu model
   */
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'Int'>
    readonly parentId: FieldRef<"Menu", 'Int'>
    readonly description: FieldRef<"Menu", 'String'>
    readonly name: FieldRef<"Menu", 'String'>
    readonly label: FieldRef<"Menu", 'String'>
    readonly icon: FieldRef<"Menu", 'String'>
    readonly path: FieldRef<"Menu", 'String'>
    readonly createdAt: FieldRef<"Menu", 'DateTime'>
    readonly updatedAt: FieldRef<"Menu", 'DateTime'>
    readonly deletedAt: FieldRef<"Menu", 'DateTime'>
    readonly deletedBy: FieldRef<"Menu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu updateManyAndReturn
   */
  export type MenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to delete.
     */
    limit?: number
  }

  /**
   * Menu.parent
   */
  export type Menu$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
  }

  /**
   * Menu.children
   */
  export type Menu$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu.acls
   */
  export type Menu$aclsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    where?: MenuAccessLevelWhereInput
    orderBy?: MenuAccessLevelOrderByWithRelationInput | MenuAccessLevelOrderByWithRelationInput[]
    cursor?: MenuAccessLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuAccessLevelScalarFieldEnum | MenuAccessLevelScalarFieldEnum[]
  }

  /**
   * Menu.groups
   */
  export type Menu$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroup
     */
    select?: MenuGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroup
     */
    omit?: MenuGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupInclude<ExtArgs> | null
    where?: MenuGroupWhereInput
    orderBy?: MenuGroupOrderByWithRelationInput | MenuGroupOrderByWithRelationInput[]
    cursor?: MenuGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuGroupScalarFieldEnum | MenuGroupScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model AccessLevel
   */

  export type AggregateAccessLevel = {
    _count: AccessLevelCountAggregateOutputType | null
    _avg: AccessLevelAvgAggregateOutputType | null
    _sum: AccessLevelSumAggregateOutputType | null
    _min: AccessLevelMinAggregateOutputType | null
    _max: AccessLevelMaxAggregateOutputType | null
  }

  export type AccessLevelAvgAggregateOutputType = {
    id: number | null
  }

  export type AccessLevelSumAggregateOutputType = {
    id: number | null
  }

  export type AccessLevelMinAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
  }

  export type AccessLevelMaxAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
  }

  export type AccessLevelCountAggregateOutputType = {
    id: number
    code: number
    description: number
    _all: number
  }


  export type AccessLevelAvgAggregateInputType = {
    id?: true
  }

  export type AccessLevelSumAggregateInputType = {
    id?: true
  }

  export type AccessLevelMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
  }

  export type AccessLevelMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
  }

  export type AccessLevelCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    _all?: true
  }

  export type AccessLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLevel to aggregate.
     */
    where?: AccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLevels to fetch.
     */
    orderBy?: AccessLevelOrderByWithRelationInput | AccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessLevels
    **/
    _count?: true | AccessLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessLevelMaxAggregateInputType
  }

  export type GetAccessLevelAggregateType<T extends AccessLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessLevel[P]>
      : GetScalarType<T[P], AggregateAccessLevel[P]>
  }




  export type AccessLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLevelWhereInput
    orderBy?: AccessLevelOrderByWithAggregationInput | AccessLevelOrderByWithAggregationInput[]
    by: AccessLevelScalarFieldEnum[] | AccessLevelScalarFieldEnum
    having?: AccessLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessLevelCountAggregateInputType | true
    _avg?: AccessLevelAvgAggregateInputType
    _sum?: AccessLevelSumAggregateInputType
    _min?: AccessLevelMinAggregateInputType
    _max?: AccessLevelMaxAggregateInputType
  }

  export type AccessLevelGroupByOutputType = {
    id: number
    code: string
    description: string | null
    _count: AccessLevelCountAggregateOutputType | null
    _avg: AccessLevelAvgAggregateOutputType | null
    _sum: AccessLevelSumAggregateOutputType | null
    _min: AccessLevelMinAggregateOutputType | null
    _max: AccessLevelMaxAggregateOutputType | null
  }

  type GetAccessLevelGroupByPayload<T extends AccessLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessLevelGroupByOutputType[P]>
            : GetScalarType<T[P], AccessLevelGroupByOutputType[P]>
        }
      >
    >


  export type AccessLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    menus?: boolean | AccessLevel$menusArgs<ExtArgs>
    groupAccess?: boolean | AccessLevel$groupAccessArgs<ExtArgs>
    _count?: boolean | AccessLevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessLevel"]>

  export type AccessLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
  }, ExtArgs["result"]["accessLevel"]>

  export type AccessLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
  }, ExtArgs["result"]["accessLevel"]>

  export type AccessLevelSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
  }

  export type AccessLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "description", ExtArgs["result"]["accessLevel"]>
  export type AccessLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menus?: boolean | AccessLevel$menusArgs<ExtArgs>
    groupAccess?: boolean | AccessLevel$groupAccessArgs<ExtArgs>
    _count?: boolean | AccessLevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccessLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccessLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccessLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessLevel"
    objects: {
      menus: Prisma.$MenuAccessLevelPayload<ExtArgs>[]
      groupAccess: Prisma.$MenuGroupAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      description: string | null
    }, ExtArgs["result"]["accessLevel"]>
    composites: {}
  }

  type AccessLevelGetPayload<S extends boolean | null | undefined | AccessLevelDefaultArgs> = $Result.GetResult<Prisma.$AccessLevelPayload, S>

  type AccessLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessLevelCountAggregateInputType | true
    }

  export interface AccessLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessLevel'], meta: { name: 'AccessLevel' } }
    /**
     * Find zero or one AccessLevel that matches the filter.
     * @param {AccessLevelFindUniqueArgs} args - Arguments to find a AccessLevel
     * @example
     * // Get one AccessLevel
     * const accessLevel = await prisma.accessLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessLevelFindUniqueArgs>(args: SelectSubset<T, AccessLevelFindUniqueArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessLevelFindUniqueOrThrowArgs} args - Arguments to find a AccessLevel
     * @example
     * // Get one AccessLevel
     * const accessLevel = await prisma.accessLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLevelFindFirstArgs} args - Arguments to find a AccessLevel
     * @example
     * // Get one AccessLevel
     * const accessLevel = await prisma.accessLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessLevelFindFirstArgs>(args?: SelectSubset<T, AccessLevelFindFirstArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLevelFindFirstOrThrowArgs} args - Arguments to find a AccessLevel
     * @example
     * // Get one AccessLevel
     * const accessLevel = await prisma.accessLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessLevels
     * const accessLevels = await prisma.accessLevel.findMany()
     * 
     * // Get first 10 AccessLevels
     * const accessLevels = await prisma.accessLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessLevelWithIdOnly = await prisma.accessLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessLevelFindManyArgs>(args?: SelectSubset<T, AccessLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessLevel.
     * @param {AccessLevelCreateArgs} args - Arguments to create a AccessLevel.
     * @example
     * // Create one AccessLevel
     * const AccessLevel = await prisma.accessLevel.create({
     *   data: {
     *     // ... data to create a AccessLevel
     *   }
     * })
     * 
     */
    create<T extends AccessLevelCreateArgs>(args: SelectSubset<T, AccessLevelCreateArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessLevels.
     * @param {AccessLevelCreateManyArgs} args - Arguments to create many AccessLevels.
     * @example
     * // Create many AccessLevels
     * const accessLevel = await prisma.accessLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessLevelCreateManyArgs>(args?: SelectSubset<T, AccessLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessLevels and returns the data saved in the database.
     * @param {AccessLevelCreateManyAndReturnArgs} args - Arguments to create many AccessLevels.
     * @example
     * // Create many AccessLevels
     * const accessLevel = await prisma.accessLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessLevels and only return the `id`
     * const accessLevelWithIdOnly = await prisma.accessLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessLevel.
     * @param {AccessLevelDeleteArgs} args - Arguments to delete one AccessLevel.
     * @example
     * // Delete one AccessLevel
     * const AccessLevel = await prisma.accessLevel.delete({
     *   where: {
     *     // ... filter to delete one AccessLevel
     *   }
     * })
     * 
     */
    delete<T extends AccessLevelDeleteArgs>(args: SelectSubset<T, AccessLevelDeleteArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessLevel.
     * @param {AccessLevelUpdateArgs} args - Arguments to update one AccessLevel.
     * @example
     * // Update one AccessLevel
     * const accessLevel = await prisma.accessLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessLevelUpdateArgs>(args: SelectSubset<T, AccessLevelUpdateArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessLevels.
     * @param {AccessLevelDeleteManyArgs} args - Arguments to filter AccessLevels to delete.
     * @example
     * // Delete a few AccessLevels
     * const { count } = await prisma.accessLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessLevelDeleteManyArgs>(args?: SelectSubset<T, AccessLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessLevels
     * const accessLevel = await prisma.accessLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessLevelUpdateManyArgs>(args: SelectSubset<T, AccessLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessLevels and returns the data updated in the database.
     * @param {AccessLevelUpdateManyAndReturnArgs} args - Arguments to update many AccessLevels.
     * @example
     * // Update many AccessLevels
     * const accessLevel = await prisma.accessLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessLevels and only return the `id`
     * const accessLevelWithIdOnly = await prisma.accessLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessLevel.
     * @param {AccessLevelUpsertArgs} args - Arguments to update or create a AccessLevel.
     * @example
     * // Update or create a AccessLevel
     * const accessLevel = await prisma.accessLevel.upsert({
     *   create: {
     *     // ... data to create a AccessLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessLevel we want to update
     *   }
     * })
     */
    upsert<T extends AccessLevelUpsertArgs>(args: SelectSubset<T, AccessLevelUpsertArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLevelCountArgs} args - Arguments to filter AccessLevels to count.
     * @example
     * // Count the number of AccessLevels
     * const count = await prisma.accessLevel.count({
     *   where: {
     *     // ... the filter for the AccessLevels we want to count
     *   }
     * })
    **/
    count<T extends AccessLevelCountArgs>(
      args?: Subset<T, AccessLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessLevelAggregateArgs>(args: Subset<T, AccessLevelAggregateArgs>): Prisma.PrismaPromise<GetAccessLevelAggregateType<T>>

    /**
     * Group by AccessLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessLevelGroupByArgs['orderBy'] }
        : { orderBy?: AccessLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessLevel model
   */
  readonly fields: AccessLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menus<T extends AccessLevel$menusArgs<ExtArgs> = {}>(args?: Subset<T, AccessLevel$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupAccess<T extends AccessLevel$groupAccessArgs<ExtArgs> = {}>(args?: Subset<T, AccessLevel$groupAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessLevel model
   */
  interface AccessLevelFieldRefs {
    readonly id: FieldRef<"AccessLevel", 'Int'>
    readonly code: FieldRef<"AccessLevel", 'String'>
    readonly description: FieldRef<"AccessLevel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AccessLevel findUnique
   */
  export type AccessLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which AccessLevel to fetch.
     */
    where: AccessLevelWhereUniqueInput
  }

  /**
   * AccessLevel findUniqueOrThrow
   */
  export type AccessLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which AccessLevel to fetch.
     */
    where: AccessLevelWhereUniqueInput
  }

  /**
   * AccessLevel findFirst
   */
  export type AccessLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which AccessLevel to fetch.
     */
    where?: AccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLevels to fetch.
     */
    orderBy?: AccessLevelOrderByWithRelationInput | AccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLevels.
     */
    cursor?: AccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLevels.
     */
    distinct?: AccessLevelScalarFieldEnum | AccessLevelScalarFieldEnum[]
  }

  /**
   * AccessLevel findFirstOrThrow
   */
  export type AccessLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which AccessLevel to fetch.
     */
    where?: AccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLevels to fetch.
     */
    orderBy?: AccessLevelOrderByWithRelationInput | AccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLevels.
     */
    cursor?: AccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLevels.
     */
    distinct?: AccessLevelScalarFieldEnum | AccessLevelScalarFieldEnum[]
  }

  /**
   * AccessLevel findMany
   */
  export type AccessLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which AccessLevels to fetch.
     */
    where?: AccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLevels to fetch.
     */
    orderBy?: AccessLevelOrderByWithRelationInput | AccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessLevels.
     */
    cursor?: AccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLevels.
     */
    skip?: number
    distinct?: AccessLevelScalarFieldEnum | AccessLevelScalarFieldEnum[]
  }

  /**
   * AccessLevel create
   */
  export type AccessLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessLevel.
     */
    data: XOR<AccessLevelCreateInput, AccessLevelUncheckedCreateInput>
  }

  /**
   * AccessLevel createMany
   */
  export type AccessLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessLevels.
     */
    data: AccessLevelCreateManyInput | AccessLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessLevel createManyAndReturn
   */
  export type AccessLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * The data used to create many AccessLevels.
     */
    data: AccessLevelCreateManyInput | AccessLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessLevel update
   */
  export type AccessLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessLevel.
     */
    data: XOR<AccessLevelUpdateInput, AccessLevelUncheckedUpdateInput>
    /**
     * Choose, which AccessLevel to update.
     */
    where: AccessLevelWhereUniqueInput
  }

  /**
   * AccessLevel updateMany
   */
  export type AccessLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessLevels.
     */
    data: XOR<AccessLevelUpdateManyMutationInput, AccessLevelUncheckedUpdateManyInput>
    /**
     * Filter which AccessLevels to update
     */
    where?: AccessLevelWhereInput
    /**
     * Limit how many AccessLevels to update.
     */
    limit?: number
  }

  /**
   * AccessLevel updateManyAndReturn
   */
  export type AccessLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * The data used to update AccessLevels.
     */
    data: XOR<AccessLevelUpdateManyMutationInput, AccessLevelUncheckedUpdateManyInput>
    /**
     * Filter which AccessLevels to update
     */
    where?: AccessLevelWhereInput
    /**
     * Limit how many AccessLevels to update.
     */
    limit?: number
  }

  /**
   * AccessLevel upsert
   */
  export type AccessLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessLevel to update in case it exists.
     */
    where: AccessLevelWhereUniqueInput
    /**
     * In case the AccessLevel found by the `where` argument doesn't exist, create a new AccessLevel with this data.
     */
    create: XOR<AccessLevelCreateInput, AccessLevelUncheckedCreateInput>
    /**
     * In case the AccessLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessLevelUpdateInput, AccessLevelUncheckedUpdateInput>
  }

  /**
   * AccessLevel delete
   */
  export type AccessLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
    /**
     * Filter which AccessLevel to delete.
     */
    where: AccessLevelWhereUniqueInput
  }

  /**
   * AccessLevel deleteMany
   */
  export type AccessLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLevels to delete
     */
    where?: AccessLevelWhereInput
    /**
     * Limit how many AccessLevels to delete.
     */
    limit?: number
  }

  /**
   * AccessLevel.menus
   */
  export type AccessLevel$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    where?: MenuAccessLevelWhereInput
    orderBy?: MenuAccessLevelOrderByWithRelationInput | MenuAccessLevelOrderByWithRelationInput[]
    cursor?: MenuAccessLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuAccessLevelScalarFieldEnum | MenuAccessLevelScalarFieldEnum[]
  }

  /**
   * AccessLevel.groupAccess
   */
  export type AccessLevel$groupAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    where?: MenuGroupAccessWhereInput
    orderBy?: MenuGroupAccessOrderByWithRelationInput | MenuGroupAccessOrderByWithRelationInput[]
    cursor?: MenuGroupAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuGroupAccessScalarFieldEnum | MenuGroupAccessScalarFieldEnum[]
  }

  /**
   * AccessLevel without action
   */
  export type AccessLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLevel
     */
    select?: AccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLevel
     */
    omit?: AccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLevelInclude<ExtArgs> | null
  }


  /**
   * Model MenuAccessLevel
   */

  export type AggregateMenuAccessLevel = {
    _count: MenuAccessLevelCountAggregateOutputType | null
    _avg: MenuAccessLevelAvgAggregateOutputType | null
    _sum: MenuAccessLevelSumAggregateOutputType | null
    _min: MenuAccessLevelMinAggregateOutputType | null
    _max: MenuAccessLevelMaxAggregateOutputType | null
  }

  export type MenuAccessLevelAvgAggregateOutputType = {
    id: number | null
    menuId: number | null
    accessLevelId: number | null
  }

  export type MenuAccessLevelSumAggregateOutputType = {
    id: number | null
    menuId: number | null
    accessLevelId: number | null
  }

  export type MenuAccessLevelMinAggregateOutputType = {
    id: number | null
    menuId: number | null
    accessLevelId: number | null
  }

  export type MenuAccessLevelMaxAggregateOutputType = {
    id: number | null
    menuId: number | null
    accessLevelId: number | null
  }

  export type MenuAccessLevelCountAggregateOutputType = {
    id: number
    menuId: number
    accessLevelId: number
    _all: number
  }


  export type MenuAccessLevelAvgAggregateInputType = {
    id?: true
    menuId?: true
    accessLevelId?: true
  }

  export type MenuAccessLevelSumAggregateInputType = {
    id?: true
    menuId?: true
    accessLevelId?: true
  }

  export type MenuAccessLevelMinAggregateInputType = {
    id?: true
    menuId?: true
    accessLevelId?: true
  }

  export type MenuAccessLevelMaxAggregateInputType = {
    id?: true
    menuId?: true
    accessLevelId?: true
  }

  export type MenuAccessLevelCountAggregateInputType = {
    id?: true
    menuId?: true
    accessLevelId?: true
    _all?: true
  }

  export type MenuAccessLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuAccessLevel to aggregate.
     */
    where?: MenuAccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuAccessLevels to fetch.
     */
    orderBy?: MenuAccessLevelOrderByWithRelationInput | MenuAccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuAccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuAccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuAccessLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuAccessLevels
    **/
    _count?: true | MenuAccessLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAccessLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuAccessLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuAccessLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuAccessLevelMaxAggregateInputType
  }

  export type GetMenuAccessLevelAggregateType<T extends MenuAccessLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuAccessLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuAccessLevel[P]>
      : GetScalarType<T[P], AggregateMenuAccessLevel[P]>
  }




  export type MenuAccessLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuAccessLevelWhereInput
    orderBy?: MenuAccessLevelOrderByWithAggregationInput | MenuAccessLevelOrderByWithAggregationInput[]
    by: MenuAccessLevelScalarFieldEnum[] | MenuAccessLevelScalarFieldEnum
    having?: MenuAccessLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuAccessLevelCountAggregateInputType | true
    _avg?: MenuAccessLevelAvgAggregateInputType
    _sum?: MenuAccessLevelSumAggregateInputType
    _min?: MenuAccessLevelMinAggregateInputType
    _max?: MenuAccessLevelMaxAggregateInputType
  }

  export type MenuAccessLevelGroupByOutputType = {
    id: number
    menuId: number
    accessLevelId: number
    _count: MenuAccessLevelCountAggregateOutputType | null
    _avg: MenuAccessLevelAvgAggregateOutputType | null
    _sum: MenuAccessLevelSumAggregateOutputType | null
    _min: MenuAccessLevelMinAggregateOutputType | null
    _max: MenuAccessLevelMaxAggregateOutputType | null
  }

  type GetMenuAccessLevelGroupByPayload<T extends MenuAccessLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuAccessLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuAccessLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuAccessLevelGroupByOutputType[P]>
            : GetScalarType<T[P], MenuAccessLevelGroupByOutputType[P]>
        }
      >
    >


  export type MenuAccessLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuId?: boolean
    accessLevelId?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuAccessLevel"]>

  export type MenuAccessLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuId?: boolean
    accessLevelId?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuAccessLevel"]>

  export type MenuAccessLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuId?: boolean
    accessLevelId?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuAccessLevel"]>

  export type MenuAccessLevelSelectScalar = {
    id?: boolean
    menuId?: boolean
    accessLevelId?: boolean
  }

  export type MenuAccessLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menuId" | "accessLevelId", ExtArgs["result"]["menuAccessLevel"]>
  export type MenuAccessLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }
  export type MenuAccessLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }
  export type MenuAccessLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }

  export type $MenuAccessLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuAccessLevel"
    objects: {
      menu: Prisma.$MenuPayload<ExtArgs>
      accessLevel: Prisma.$AccessLevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menuId: number
      accessLevelId: number
    }, ExtArgs["result"]["menuAccessLevel"]>
    composites: {}
  }

  type MenuAccessLevelGetPayload<S extends boolean | null | undefined | MenuAccessLevelDefaultArgs> = $Result.GetResult<Prisma.$MenuAccessLevelPayload, S>

  type MenuAccessLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuAccessLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuAccessLevelCountAggregateInputType | true
    }

  export interface MenuAccessLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuAccessLevel'], meta: { name: 'MenuAccessLevel' } }
    /**
     * Find zero or one MenuAccessLevel that matches the filter.
     * @param {MenuAccessLevelFindUniqueArgs} args - Arguments to find a MenuAccessLevel
     * @example
     * // Get one MenuAccessLevel
     * const menuAccessLevel = await prisma.menuAccessLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuAccessLevelFindUniqueArgs>(args: SelectSubset<T, MenuAccessLevelFindUniqueArgs<ExtArgs>>): Prisma__MenuAccessLevelClient<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuAccessLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuAccessLevelFindUniqueOrThrowArgs} args - Arguments to find a MenuAccessLevel
     * @example
     * // Get one MenuAccessLevel
     * const menuAccessLevel = await prisma.menuAccessLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuAccessLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuAccessLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuAccessLevelClient<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuAccessLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAccessLevelFindFirstArgs} args - Arguments to find a MenuAccessLevel
     * @example
     * // Get one MenuAccessLevel
     * const menuAccessLevel = await prisma.menuAccessLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuAccessLevelFindFirstArgs>(args?: SelectSubset<T, MenuAccessLevelFindFirstArgs<ExtArgs>>): Prisma__MenuAccessLevelClient<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuAccessLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAccessLevelFindFirstOrThrowArgs} args - Arguments to find a MenuAccessLevel
     * @example
     * // Get one MenuAccessLevel
     * const menuAccessLevel = await prisma.menuAccessLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuAccessLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuAccessLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuAccessLevelClient<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuAccessLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAccessLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuAccessLevels
     * const menuAccessLevels = await prisma.menuAccessLevel.findMany()
     * 
     * // Get first 10 MenuAccessLevels
     * const menuAccessLevels = await prisma.menuAccessLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuAccessLevelWithIdOnly = await prisma.menuAccessLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuAccessLevelFindManyArgs>(args?: SelectSubset<T, MenuAccessLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuAccessLevel.
     * @param {MenuAccessLevelCreateArgs} args - Arguments to create a MenuAccessLevel.
     * @example
     * // Create one MenuAccessLevel
     * const MenuAccessLevel = await prisma.menuAccessLevel.create({
     *   data: {
     *     // ... data to create a MenuAccessLevel
     *   }
     * })
     * 
     */
    create<T extends MenuAccessLevelCreateArgs>(args: SelectSubset<T, MenuAccessLevelCreateArgs<ExtArgs>>): Prisma__MenuAccessLevelClient<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuAccessLevels.
     * @param {MenuAccessLevelCreateManyArgs} args - Arguments to create many MenuAccessLevels.
     * @example
     * // Create many MenuAccessLevels
     * const menuAccessLevel = await prisma.menuAccessLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuAccessLevelCreateManyArgs>(args?: SelectSubset<T, MenuAccessLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuAccessLevels and returns the data saved in the database.
     * @param {MenuAccessLevelCreateManyAndReturnArgs} args - Arguments to create many MenuAccessLevels.
     * @example
     * // Create many MenuAccessLevels
     * const menuAccessLevel = await prisma.menuAccessLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuAccessLevels and only return the `id`
     * const menuAccessLevelWithIdOnly = await prisma.menuAccessLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuAccessLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuAccessLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuAccessLevel.
     * @param {MenuAccessLevelDeleteArgs} args - Arguments to delete one MenuAccessLevel.
     * @example
     * // Delete one MenuAccessLevel
     * const MenuAccessLevel = await prisma.menuAccessLevel.delete({
     *   where: {
     *     // ... filter to delete one MenuAccessLevel
     *   }
     * })
     * 
     */
    delete<T extends MenuAccessLevelDeleteArgs>(args: SelectSubset<T, MenuAccessLevelDeleteArgs<ExtArgs>>): Prisma__MenuAccessLevelClient<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuAccessLevel.
     * @param {MenuAccessLevelUpdateArgs} args - Arguments to update one MenuAccessLevel.
     * @example
     * // Update one MenuAccessLevel
     * const menuAccessLevel = await prisma.menuAccessLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuAccessLevelUpdateArgs>(args: SelectSubset<T, MenuAccessLevelUpdateArgs<ExtArgs>>): Prisma__MenuAccessLevelClient<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuAccessLevels.
     * @param {MenuAccessLevelDeleteManyArgs} args - Arguments to filter MenuAccessLevels to delete.
     * @example
     * // Delete a few MenuAccessLevels
     * const { count } = await prisma.menuAccessLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuAccessLevelDeleteManyArgs>(args?: SelectSubset<T, MenuAccessLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuAccessLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAccessLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuAccessLevels
     * const menuAccessLevel = await prisma.menuAccessLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuAccessLevelUpdateManyArgs>(args: SelectSubset<T, MenuAccessLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuAccessLevels and returns the data updated in the database.
     * @param {MenuAccessLevelUpdateManyAndReturnArgs} args - Arguments to update many MenuAccessLevels.
     * @example
     * // Update many MenuAccessLevels
     * const menuAccessLevel = await prisma.menuAccessLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuAccessLevels and only return the `id`
     * const menuAccessLevelWithIdOnly = await prisma.menuAccessLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuAccessLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuAccessLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuAccessLevel.
     * @param {MenuAccessLevelUpsertArgs} args - Arguments to update or create a MenuAccessLevel.
     * @example
     * // Update or create a MenuAccessLevel
     * const menuAccessLevel = await prisma.menuAccessLevel.upsert({
     *   create: {
     *     // ... data to create a MenuAccessLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuAccessLevel we want to update
     *   }
     * })
     */
    upsert<T extends MenuAccessLevelUpsertArgs>(args: SelectSubset<T, MenuAccessLevelUpsertArgs<ExtArgs>>): Prisma__MenuAccessLevelClient<$Result.GetResult<Prisma.$MenuAccessLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuAccessLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAccessLevelCountArgs} args - Arguments to filter MenuAccessLevels to count.
     * @example
     * // Count the number of MenuAccessLevels
     * const count = await prisma.menuAccessLevel.count({
     *   where: {
     *     // ... the filter for the MenuAccessLevels we want to count
     *   }
     * })
    **/
    count<T extends MenuAccessLevelCountArgs>(
      args?: Subset<T, MenuAccessLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuAccessLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuAccessLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAccessLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAccessLevelAggregateArgs>(args: Subset<T, MenuAccessLevelAggregateArgs>): Prisma.PrismaPromise<GetMenuAccessLevelAggregateType<T>>

    /**
     * Group by MenuAccessLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAccessLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuAccessLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuAccessLevelGroupByArgs['orderBy'] }
        : { orderBy?: MenuAccessLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuAccessLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuAccessLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuAccessLevel model
   */
  readonly fields: MenuAccessLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuAccessLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuAccessLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accessLevel<T extends AccessLevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccessLevelDefaultArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuAccessLevel model
   */
  interface MenuAccessLevelFieldRefs {
    readonly id: FieldRef<"MenuAccessLevel", 'Int'>
    readonly menuId: FieldRef<"MenuAccessLevel", 'Int'>
    readonly accessLevelId: FieldRef<"MenuAccessLevel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MenuAccessLevel findUnique
   */
  export type MenuAccessLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which MenuAccessLevel to fetch.
     */
    where: MenuAccessLevelWhereUniqueInput
  }

  /**
   * MenuAccessLevel findUniqueOrThrow
   */
  export type MenuAccessLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which MenuAccessLevel to fetch.
     */
    where: MenuAccessLevelWhereUniqueInput
  }

  /**
   * MenuAccessLevel findFirst
   */
  export type MenuAccessLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which MenuAccessLevel to fetch.
     */
    where?: MenuAccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuAccessLevels to fetch.
     */
    orderBy?: MenuAccessLevelOrderByWithRelationInput | MenuAccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuAccessLevels.
     */
    cursor?: MenuAccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuAccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuAccessLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuAccessLevels.
     */
    distinct?: MenuAccessLevelScalarFieldEnum | MenuAccessLevelScalarFieldEnum[]
  }

  /**
   * MenuAccessLevel findFirstOrThrow
   */
  export type MenuAccessLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which MenuAccessLevel to fetch.
     */
    where?: MenuAccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuAccessLevels to fetch.
     */
    orderBy?: MenuAccessLevelOrderByWithRelationInput | MenuAccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuAccessLevels.
     */
    cursor?: MenuAccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuAccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuAccessLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuAccessLevels.
     */
    distinct?: MenuAccessLevelScalarFieldEnum | MenuAccessLevelScalarFieldEnum[]
  }

  /**
   * MenuAccessLevel findMany
   */
  export type MenuAccessLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    /**
     * Filter, which MenuAccessLevels to fetch.
     */
    where?: MenuAccessLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuAccessLevels to fetch.
     */
    orderBy?: MenuAccessLevelOrderByWithRelationInput | MenuAccessLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuAccessLevels.
     */
    cursor?: MenuAccessLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuAccessLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuAccessLevels.
     */
    skip?: number
    distinct?: MenuAccessLevelScalarFieldEnum | MenuAccessLevelScalarFieldEnum[]
  }

  /**
   * MenuAccessLevel create
   */
  export type MenuAccessLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuAccessLevel.
     */
    data: XOR<MenuAccessLevelCreateInput, MenuAccessLevelUncheckedCreateInput>
  }

  /**
   * MenuAccessLevel createMany
   */
  export type MenuAccessLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuAccessLevels.
     */
    data: MenuAccessLevelCreateManyInput | MenuAccessLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuAccessLevel createManyAndReturn
   */
  export type MenuAccessLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * The data used to create many MenuAccessLevels.
     */
    data: MenuAccessLevelCreateManyInput | MenuAccessLevelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuAccessLevel update
   */
  export type MenuAccessLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuAccessLevel.
     */
    data: XOR<MenuAccessLevelUpdateInput, MenuAccessLevelUncheckedUpdateInput>
    /**
     * Choose, which MenuAccessLevel to update.
     */
    where: MenuAccessLevelWhereUniqueInput
  }

  /**
   * MenuAccessLevel updateMany
   */
  export type MenuAccessLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuAccessLevels.
     */
    data: XOR<MenuAccessLevelUpdateManyMutationInput, MenuAccessLevelUncheckedUpdateManyInput>
    /**
     * Filter which MenuAccessLevels to update
     */
    where?: MenuAccessLevelWhereInput
    /**
     * Limit how many MenuAccessLevels to update.
     */
    limit?: number
  }

  /**
   * MenuAccessLevel updateManyAndReturn
   */
  export type MenuAccessLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * The data used to update MenuAccessLevels.
     */
    data: XOR<MenuAccessLevelUpdateManyMutationInput, MenuAccessLevelUncheckedUpdateManyInput>
    /**
     * Filter which MenuAccessLevels to update
     */
    where?: MenuAccessLevelWhereInput
    /**
     * Limit how many MenuAccessLevels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuAccessLevel upsert
   */
  export type MenuAccessLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuAccessLevel to update in case it exists.
     */
    where: MenuAccessLevelWhereUniqueInput
    /**
     * In case the MenuAccessLevel found by the `where` argument doesn't exist, create a new MenuAccessLevel with this data.
     */
    create: XOR<MenuAccessLevelCreateInput, MenuAccessLevelUncheckedCreateInput>
    /**
     * In case the MenuAccessLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuAccessLevelUpdateInput, MenuAccessLevelUncheckedUpdateInput>
  }

  /**
   * MenuAccessLevel delete
   */
  export type MenuAccessLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
    /**
     * Filter which MenuAccessLevel to delete.
     */
    where: MenuAccessLevelWhereUniqueInput
  }

  /**
   * MenuAccessLevel deleteMany
   */
  export type MenuAccessLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuAccessLevels to delete
     */
    where?: MenuAccessLevelWhereInput
    /**
     * Limit how many MenuAccessLevels to delete.
     */
    limit?: number
  }

  /**
   * MenuAccessLevel without action
   */
  export type MenuAccessLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuAccessLevel
     */
    select?: MenuAccessLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuAccessLevel
     */
    omit?: MenuAccessLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuAccessLevelInclude<ExtArgs> | null
  }


  /**
   * Model MenuGroupAccess
   */

  export type AggregateMenuGroupAccess = {
    _count: MenuGroupAccessCountAggregateOutputType | null
    _avg: MenuGroupAccessAvgAggregateOutputType | null
    _sum: MenuGroupAccessSumAggregateOutputType | null
    _min: MenuGroupAccessMinAggregateOutputType | null
    _max: MenuGroupAccessMaxAggregateOutputType | null
  }

  export type MenuGroupAccessAvgAggregateOutputType = {
    id: number | null
    menuGroupId: number | null
    accessLevelId: number | null
  }

  export type MenuGroupAccessSumAggregateOutputType = {
    id: number | null
    menuGroupId: number | null
    accessLevelId: number | null
  }

  export type MenuGroupAccessMinAggregateOutputType = {
    id: number | null
    menuGroupId: number | null
    accessLevelId: number | null
  }

  export type MenuGroupAccessMaxAggregateOutputType = {
    id: number | null
    menuGroupId: number | null
    accessLevelId: number | null
  }

  export type MenuGroupAccessCountAggregateOutputType = {
    id: number
    menuGroupId: number
    accessLevelId: number
    _all: number
  }


  export type MenuGroupAccessAvgAggregateInputType = {
    id?: true
    menuGroupId?: true
    accessLevelId?: true
  }

  export type MenuGroupAccessSumAggregateInputType = {
    id?: true
    menuGroupId?: true
    accessLevelId?: true
  }

  export type MenuGroupAccessMinAggregateInputType = {
    id?: true
    menuGroupId?: true
    accessLevelId?: true
  }

  export type MenuGroupAccessMaxAggregateInputType = {
    id?: true
    menuGroupId?: true
    accessLevelId?: true
  }

  export type MenuGroupAccessCountAggregateInputType = {
    id?: true
    menuGroupId?: true
    accessLevelId?: true
    _all?: true
  }

  export type MenuGroupAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuGroupAccess to aggregate.
     */
    where?: MenuGroupAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuGroupAccesses to fetch.
     */
    orderBy?: MenuGroupAccessOrderByWithRelationInput | MenuGroupAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuGroupAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuGroupAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuGroupAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuGroupAccesses
    **/
    _count?: true | MenuGroupAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuGroupAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuGroupAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuGroupAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuGroupAccessMaxAggregateInputType
  }

  export type GetMenuGroupAccessAggregateType<T extends MenuGroupAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuGroupAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuGroupAccess[P]>
      : GetScalarType<T[P], AggregateMenuGroupAccess[P]>
  }




  export type MenuGroupAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuGroupAccessWhereInput
    orderBy?: MenuGroupAccessOrderByWithAggregationInput | MenuGroupAccessOrderByWithAggregationInput[]
    by: MenuGroupAccessScalarFieldEnum[] | MenuGroupAccessScalarFieldEnum
    having?: MenuGroupAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuGroupAccessCountAggregateInputType | true
    _avg?: MenuGroupAccessAvgAggregateInputType
    _sum?: MenuGroupAccessSumAggregateInputType
    _min?: MenuGroupAccessMinAggregateInputType
    _max?: MenuGroupAccessMaxAggregateInputType
  }

  export type MenuGroupAccessGroupByOutputType = {
    id: number
    menuGroupId: number
    accessLevelId: number
    _count: MenuGroupAccessCountAggregateOutputType | null
    _avg: MenuGroupAccessAvgAggregateOutputType | null
    _sum: MenuGroupAccessSumAggregateOutputType | null
    _min: MenuGroupAccessMinAggregateOutputType | null
    _max: MenuGroupAccessMaxAggregateOutputType | null
  }

  type GetMenuGroupAccessGroupByPayload<T extends MenuGroupAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupAccessGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupAccessGroupByOutputType[P]>
        }
      >
    >


  export type MenuGroupAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuGroupId?: boolean
    accessLevelId?: boolean
    menuGroup?: boolean | MenuGroupDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuGroupAccess"]>

  export type MenuGroupAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuGroupId?: boolean
    accessLevelId?: boolean
    menuGroup?: boolean | MenuGroupDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuGroupAccess"]>

  export type MenuGroupAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuGroupId?: boolean
    accessLevelId?: boolean
    menuGroup?: boolean | MenuGroupDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuGroupAccess"]>

  export type MenuGroupAccessSelectScalar = {
    id?: boolean
    menuGroupId?: boolean
    accessLevelId?: boolean
  }

  export type MenuGroupAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menuGroupId" | "accessLevelId", ExtArgs["result"]["menuGroupAccess"]>
  export type MenuGroupAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuGroup?: boolean | MenuGroupDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }
  export type MenuGroupAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuGroup?: boolean | MenuGroupDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }
  export type MenuGroupAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuGroup?: boolean | MenuGroupDefaultArgs<ExtArgs>
    accessLevel?: boolean | AccessLevelDefaultArgs<ExtArgs>
  }

  export type $MenuGroupAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuGroupAccess"
    objects: {
      menuGroup: Prisma.$MenuGroupPayload<ExtArgs>
      accessLevel: Prisma.$AccessLevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menuGroupId: number
      accessLevelId: number
    }, ExtArgs["result"]["menuGroupAccess"]>
    composites: {}
  }

  type MenuGroupAccessGetPayload<S extends boolean | null | undefined | MenuGroupAccessDefaultArgs> = $Result.GetResult<Prisma.$MenuGroupAccessPayload, S>

  type MenuGroupAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuGroupAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuGroupAccessCountAggregateInputType | true
    }

  export interface MenuGroupAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuGroupAccess'], meta: { name: 'MenuGroupAccess' } }
    /**
     * Find zero or one MenuGroupAccess that matches the filter.
     * @param {MenuGroupAccessFindUniqueArgs} args - Arguments to find a MenuGroupAccess
     * @example
     * // Get one MenuGroupAccess
     * const menuGroupAccess = await prisma.menuGroupAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuGroupAccessFindUniqueArgs>(args: SelectSubset<T, MenuGroupAccessFindUniqueArgs<ExtArgs>>): Prisma__MenuGroupAccessClient<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuGroupAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuGroupAccessFindUniqueOrThrowArgs} args - Arguments to find a MenuGroupAccess
     * @example
     * // Get one MenuGroupAccess
     * const menuGroupAccess = await prisma.menuGroupAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuGroupAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuGroupAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuGroupAccessClient<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuGroupAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupAccessFindFirstArgs} args - Arguments to find a MenuGroupAccess
     * @example
     * // Get one MenuGroupAccess
     * const menuGroupAccess = await prisma.menuGroupAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuGroupAccessFindFirstArgs>(args?: SelectSubset<T, MenuGroupAccessFindFirstArgs<ExtArgs>>): Prisma__MenuGroupAccessClient<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuGroupAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupAccessFindFirstOrThrowArgs} args - Arguments to find a MenuGroupAccess
     * @example
     * // Get one MenuGroupAccess
     * const menuGroupAccess = await prisma.menuGroupAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuGroupAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuGroupAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuGroupAccessClient<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuGroupAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuGroupAccesses
     * const menuGroupAccesses = await prisma.menuGroupAccess.findMany()
     * 
     * // Get first 10 MenuGroupAccesses
     * const menuGroupAccesses = await prisma.menuGroupAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuGroupAccessWithIdOnly = await prisma.menuGroupAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuGroupAccessFindManyArgs>(args?: SelectSubset<T, MenuGroupAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuGroupAccess.
     * @param {MenuGroupAccessCreateArgs} args - Arguments to create a MenuGroupAccess.
     * @example
     * // Create one MenuGroupAccess
     * const MenuGroupAccess = await prisma.menuGroupAccess.create({
     *   data: {
     *     // ... data to create a MenuGroupAccess
     *   }
     * })
     * 
     */
    create<T extends MenuGroupAccessCreateArgs>(args: SelectSubset<T, MenuGroupAccessCreateArgs<ExtArgs>>): Prisma__MenuGroupAccessClient<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuGroupAccesses.
     * @param {MenuGroupAccessCreateManyArgs} args - Arguments to create many MenuGroupAccesses.
     * @example
     * // Create many MenuGroupAccesses
     * const menuGroupAccess = await prisma.menuGroupAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuGroupAccessCreateManyArgs>(args?: SelectSubset<T, MenuGroupAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuGroupAccesses and returns the data saved in the database.
     * @param {MenuGroupAccessCreateManyAndReturnArgs} args - Arguments to create many MenuGroupAccesses.
     * @example
     * // Create many MenuGroupAccesses
     * const menuGroupAccess = await prisma.menuGroupAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuGroupAccesses and only return the `id`
     * const menuGroupAccessWithIdOnly = await prisma.menuGroupAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuGroupAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuGroupAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuGroupAccess.
     * @param {MenuGroupAccessDeleteArgs} args - Arguments to delete one MenuGroupAccess.
     * @example
     * // Delete one MenuGroupAccess
     * const MenuGroupAccess = await prisma.menuGroupAccess.delete({
     *   where: {
     *     // ... filter to delete one MenuGroupAccess
     *   }
     * })
     * 
     */
    delete<T extends MenuGroupAccessDeleteArgs>(args: SelectSubset<T, MenuGroupAccessDeleteArgs<ExtArgs>>): Prisma__MenuGroupAccessClient<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuGroupAccess.
     * @param {MenuGroupAccessUpdateArgs} args - Arguments to update one MenuGroupAccess.
     * @example
     * // Update one MenuGroupAccess
     * const menuGroupAccess = await prisma.menuGroupAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuGroupAccessUpdateArgs>(args: SelectSubset<T, MenuGroupAccessUpdateArgs<ExtArgs>>): Prisma__MenuGroupAccessClient<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuGroupAccesses.
     * @param {MenuGroupAccessDeleteManyArgs} args - Arguments to filter MenuGroupAccesses to delete.
     * @example
     * // Delete a few MenuGroupAccesses
     * const { count } = await prisma.menuGroupAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuGroupAccessDeleteManyArgs>(args?: SelectSubset<T, MenuGroupAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuGroupAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuGroupAccesses
     * const menuGroupAccess = await prisma.menuGroupAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuGroupAccessUpdateManyArgs>(args: SelectSubset<T, MenuGroupAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuGroupAccesses and returns the data updated in the database.
     * @param {MenuGroupAccessUpdateManyAndReturnArgs} args - Arguments to update many MenuGroupAccesses.
     * @example
     * // Update many MenuGroupAccesses
     * const menuGroupAccess = await prisma.menuGroupAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuGroupAccesses and only return the `id`
     * const menuGroupAccessWithIdOnly = await prisma.menuGroupAccess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuGroupAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuGroupAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuGroupAccess.
     * @param {MenuGroupAccessUpsertArgs} args - Arguments to update or create a MenuGroupAccess.
     * @example
     * // Update or create a MenuGroupAccess
     * const menuGroupAccess = await prisma.menuGroupAccess.upsert({
     *   create: {
     *     // ... data to create a MenuGroupAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuGroupAccess we want to update
     *   }
     * })
     */
    upsert<T extends MenuGroupAccessUpsertArgs>(args: SelectSubset<T, MenuGroupAccessUpsertArgs<ExtArgs>>): Prisma__MenuGroupAccessClient<$Result.GetResult<Prisma.$MenuGroupAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuGroupAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupAccessCountArgs} args - Arguments to filter MenuGroupAccesses to count.
     * @example
     * // Count the number of MenuGroupAccesses
     * const count = await prisma.menuGroupAccess.count({
     *   where: {
     *     // ... the filter for the MenuGroupAccesses we want to count
     *   }
     * })
    **/
    count<T extends MenuGroupAccessCountArgs>(
      args?: Subset<T, MenuGroupAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuGroupAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuGroupAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuGroupAccessAggregateArgs>(args: Subset<T, MenuGroupAccessAggregateArgs>): Prisma.PrismaPromise<GetMenuGroupAccessAggregateType<T>>

    /**
     * Group by MenuGroupAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupAccessGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuGroupAccess model
   */
  readonly fields: MenuGroupAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuGroupAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuGroupAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuGroup<T extends MenuGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuGroupDefaultArgs<ExtArgs>>): Prisma__MenuGroupClient<$Result.GetResult<Prisma.$MenuGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accessLevel<T extends AccessLevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccessLevelDefaultArgs<ExtArgs>>): Prisma__AccessLevelClient<$Result.GetResult<Prisma.$AccessLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuGroupAccess model
   */
  interface MenuGroupAccessFieldRefs {
    readonly id: FieldRef<"MenuGroupAccess", 'Int'>
    readonly menuGroupId: FieldRef<"MenuGroupAccess", 'Int'>
    readonly accessLevelId: FieldRef<"MenuGroupAccess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MenuGroupAccess findUnique
   */
  export type MenuGroupAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroupAccess to fetch.
     */
    where: MenuGroupAccessWhereUniqueInput
  }

  /**
   * MenuGroupAccess findUniqueOrThrow
   */
  export type MenuGroupAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroupAccess to fetch.
     */
    where: MenuGroupAccessWhereUniqueInput
  }

  /**
   * MenuGroupAccess findFirst
   */
  export type MenuGroupAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroupAccess to fetch.
     */
    where?: MenuGroupAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuGroupAccesses to fetch.
     */
    orderBy?: MenuGroupAccessOrderByWithRelationInput | MenuGroupAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuGroupAccesses.
     */
    cursor?: MenuGroupAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuGroupAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuGroupAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuGroupAccesses.
     */
    distinct?: MenuGroupAccessScalarFieldEnum | MenuGroupAccessScalarFieldEnum[]
  }

  /**
   * MenuGroupAccess findFirstOrThrow
   */
  export type MenuGroupAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroupAccess to fetch.
     */
    where?: MenuGroupAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuGroupAccesses to fetch.
     */
    orderBy?: MenuGroupAccessOrderByWithRelationInput | MenuGroupAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuGroupAccesses.
     */
    cursor?: MenuGroupAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuGroupAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuGroupAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuGroupAccesses.
     */
    distinct?: MenuGroupAccessScalarFieldEnum | MenuGroupAccessScalarFieldEnum[]
  }

  /**
   * MenuGroupAccess findMany
   */
  export type MenuGroupAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which MenuGroupAccesses to fetch.
     */
    where?: MenuGroupAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuGroupAccesses to fetch.
     */
    orderBy?: MenuGroupAccessOrderByWithRelationInput | MenuGroupAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuGroupAccesses.
     */
    cursor?: MenuGroupAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuGroupAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuGroupAccesses.
     */
    skip?: number
    distinct?: MenuGroupAccessScalarFieldEnum | MenuGroupAccessScalarFieldEnum[]
  }

  /**
   * MenuGroupAccess create
   */
  export type MenuGroupAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuGroupAccess.
     */
    data: XOR<MenuGroupAccessCreateInput, MenuGroupAccessUncheckedCreateInput>
  }

  /**
   * MenuGroupAccess createMany
   */
  export type MenuGroupAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuGroupAccesses.
     */
    data: MenuGroupAccessCreateManyInput | MenuGroupAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuGroupAccess createManyAndReturn
   */
  export type MenuGroupAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * The data used to create many MenuGroupAccesses.
     */
    data: MenuGroupAccessCreateManyInput | MenuGroupAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuGroupAccess update
   */
  export type MenuGroupAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuGroupAccess.
     */
    data: XOR<MenuGroupAccessUpdateInput, MenuGroupAccessUncheckedUpdateInput>
    /**
     * Choose, which MenuGroupAccess to update.
     */
    where: MenuGroupAccessWhereUniqueInput
  }

  /**
   * MenuGroupAccess updateMany
   */
  export type MenuGroupAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuGroupAccesses.
     */
    data: XOR<MenuGroupAccessUpdateManyMutationInput, MenuGroupAccessUncheckedUpdateManyInput>
    /**
     * Filter which MenuGroupAccesses to update
     */
    where?: MenuGroupAccessWhereInput
    /**
     * Limit how many MenuGroupAccesses to update.
     */
    limit?: number
  }

  /**
   * MenuGroupAccess updateManyAndReturn
   */
  export type MenuGroupAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * The data used to update MenuGroupAccesses.
     */
    data: XOR<MenuGroupAccessUpdateManyMutationInput, MenuGroupAccessUncheckedUpdateManyInput>
    /**
     * Filter which MenuGroupAccesses to update
     */
    where?: MenuGroupAccessWhereInput
    /**
     * Limit how many MenuGroupAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuGroupAccess upsert
   */
  export type MenuGroupAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuGroupAccess to update in case it exists.
     */
    where: MenuGroupAccessWhereUniqueInput
    /**
     * In case the MenuGroupAccess found by the `where` argument doesn't exist, create a new MenuGroupAccess with this data.
     */
    create: XOR<MenuGroupAccessCreateInput, MenuGroupAccessUncheckedCreateInput>
    /**
     * In case the MenuGroupAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuGroupAccessUpdateInput, MenuGroupAccessUncheckedUpdateInput>
  }

  /**
   * MenuGroupAccess delete
   */
  export type MenuGroupAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
    /**
     * Filter which MenuGroupAccess to delete.
     */
    where: MenuGroupAccessWhereUniqueInput
  }

  /**
   * MenuGroupAccess deleteMany
   */
  export type MenuGroupAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuGroupAccesses to delete
     */
    where?: MenuGroupAccessWhereInput
    /**
     * Limit how many MenuGroupAccesses to delete.
     */
    limit?: number
  }

  /**
   * MenuGroupAccess without action
   */
  export type MenuGroupAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuGroupAccess
     */
    select?: MenuGroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuGroupAccess
     */
    omit?: MenuGroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuGroupAccessInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    email: 'email',
    password: 'password',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    emailSecondary: 'emailSecondary',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const MenuGroupScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    menuId: 'menuId',
    isActive: 'isActive',
    orderNumber: 'orderNumber'
  };

  export type MenuGroupScalarFieldEnum = (typeof MenuGroupScalarFieldEnum)[keyof typeof MenuGroupScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    parentId: 'parentId',
    description: 'description',
    name: 'name',
    label: 'label',
    icon: 'icon',
    path: 'path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const AccessLevelScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description'
  };

  export type AccessLevelScalarFieldEnum = (typeof AccessLevelScalarFieldEnum)[keyof typeof AccessLevelScalarFieldEnum]


  export const MenuAccessLevelScalarFieldEnum: {
    id: 'id',
    menuId: 'menuId',
    accessLevelId: 'accessLevelId'
  };

  export type MenuAccessLevelScalarFieldEnum = (typeof MenuAccessLevelScalarFieldEnum)[keyof typeof MenuAccessLevelScalarFieldEnum]


  export const MenuGroupAccessScalarFieldEnum: {
    id: 'id',
    menuGroupId: 'menuGroupId',
    accessLevelId: 'accessLevelId'
  };

  export type MenuGroupAccessScalarFieldEnum = (typeof MenuGroupAccessScalarFieldEnum)[keyof typeof MenuGroupAccessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    uuid?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    groupId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profile?: ProfileOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    groupId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id" | "uuid" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    uuid?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    groupId?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    deletedBy?: StringNullableFilter<"Group"> | string | null
    users?: UserListRelationFilter
    menus?: MenuGroupListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    menus?: MenuGroupOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Group"> | Date | string | null
    deletedBy?: StringNullableFilter<"Group"> | string | null
    users?: UserListRelationFilter
    menus?: MenuGroupListRelationFilter
  }, "id" | "name">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Group"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Group"> | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    firstName?: StringNullableFilter<"Profile"> | string | null
    lastName?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    emailSecondary?: StringNullableFilter<"Profile"> | string | null
    userId?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    emailSecondary?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstName?: StringNullableFilter<"Profile"> | string | null
    lastName?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    emailSecondary?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    emailSecondary?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    firstName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    emailSecondary?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type MenuGroupWhereInput = {
    AND?: MenuGroupWhereInput | MenuGroupWhereInput[]
    OR?: MenuGroupWhereInput[]
    NOT?: MenuGroupWhereInput | MenuGroupWhereInput[]
    id?: IntFilter<"MenuGroup"> | number
    groupId?: IntFilter<"MenuGroup"> | number
    menuId?: IntFilter<"MenuGroup"> | number
    isActive?: BoolFilter<"MenuGroup"> | boolean
    orderNumber?: IntFilter<"MenuGroup"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
    access?: MenuGroupAccessListRelationFilter
  }

  export type MenuGroupOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    menuId?: SortOrder
    isActive?: SortOrder
    orderNumber?: SortOrder
    group?: GroupOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
    access?: MenuGroupAccessOrderByRelationAggregateInput
  }

  export type MenuGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    groupId_menuId?: MenuGroupGroupIdMenuIdCompoundUniqueInput
    AND?: MenuGroupWhereInput | MenuGroupWhereInput[]
    OR?: MenuGroupWhereInput[]
    NOT?: MenuGroupWhereInput | MenuGroupWhereInput[]
    groupId?: IntFilter<"MenuGroup"> | number
    menuId?: IntFilter<"MenuGroup"> | number
    isActive?: BoolFilter<"MenuGroup"> | boolean
    orderNumber?: IntFilter<"MenuGroup"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
    access?: MenuGroupAccessListRelationFilter
  }, "id" | "groupId_menuId">

  export type MenuGroupOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    menuId?: SortOrder
    isActive?: SortOrder
    orderNumber?: SortOrder
    _count?: MenuGroupCountOrderByAggregateInput
    _avg?: MenuGroupAvgOrderByAggregateInput
    _max?: MenuGroupMaxOrderByAggregateInput
    _min?: MenuGroupMinOrderByAggregateInput
    _sum?: MenuGroupSumOrderByAggregateInput
  }

  export type MenuGroupScalarWhereWithAggregatesInput = {
    AND?: MenuGroupScalarWhereWithAggregatesInput | MenuGroupScalarWhereWithAggregatesInput[]
    OR?: MenuGroupScalarWhereWithAggregatesInput[]
    NOT?: MenuGroupScalarWhereWithAggregatesInput | MenuGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuGroup"> | number
    groupId?: IntWithAggregatesFilter<"MenuGroup"> | number
    menuId?: IntWithAggregatesFilter<"MenuGroup"> | number
    isActive?: BoolWithAggregatesFilter<"MenuGroup"> | boolean
    orderNumber?: IntWithAggregatesFilter<"MenuGroup"> | number
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: IntFilter<"Menu"> | number
    parentId?: IntNullableFilter<"Menu"> | number | null
    description?: StringNullableFilter<"Menu"> | string | null
    name?: StringFilter<"Menu"> | string
    label?: StringFilter<"Menu"> | string
    icon?: StringNullableFilter<"Menu"> | string | null
    path?: StringFilter<"Menu"> | string
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    deletedBy?: StringNullableFilter<"Menu"> | string | null
    parent?: XOR<MenuNullableScalarRelationFilter, MenuWhereInput> | null
    children?: MenuListRelationFilter
    acls?: MenuAccessLevelListRelationFilter
    groups?: MenuGroupListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    name?: SortOrder
    label?: SortOrder
    icon?: SortOrderInput | SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    parent?: MenuOrderByWithRelationInput
    children?: MenuOrderByRelationAggregateInput
    acls?: MenuAccessLevelOrderByRelationAggregateInput
    groups?: MenuGroupOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    parentId?: IntNullableFilter<"Menu"> | number | null
    description?: StringNullableFilter<"Menu"> | string | null
    name?: StringFilter<"Menu"> | string
    label?: StringFilter<"Menu"> | string
    icon?: StringNullableFilter<"Menu"> | string | null
    path?: StringFilter<"Menu"> | string
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    deletedBy?: StringNullableFilter<"Menu"> | string | null
    parent?: XOR<MenuNullableScalarRelationFilter, MenuWhereInput> | null
    children?: MenuListRelationFilter
    acls?: MenuAccessLevelListRelationFilter
    groups?: MenuGroupListRelationFilter
  }, "id">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    name?: SortOrder
    label?: SortOrder
    icon?: SortOrderInput | SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Menu"> | number
    parentId?: IntNullableWithAggregatesFilter<"Menu"> | number | null
    description?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    name?: StringWithAggregatesFilter<"Menu"> | string
    label?: StringWithAggregatesFilter<"Menu"> | string
    icon?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    path?: StringWithAggregatesFilter<"Menu"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Menu"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Menu"> | string | null
  }

  export type AccessLevelWhereInput = {
    AND?: AccessLevelWhereInput | AccessLevelWhereInput[]
    OR?: AccessLevelWhereInput[]
    NOT?: AccessLevelWhereInput | AccessLevelWhereInput[]
    id?: IntFilter<"AccessLevel"> | number
    code?: StringFilter<"AccessLevel"> | string
    description?: StringNullableFilter<"AccessLevel"> | string | null
    menus?: MenuAccessLevelListRelationFilter
    groupAccess?: MenuGroupAccessListRelationFilter
  }

  export type AccessLevelOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    menus?: MenuAccessLevelOrderByRelationAggregateInput
    groupAccess?: MenuGroupAccessOrderByRelationAggregateInput
  }

  export type AccessLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccessLevelWhereInput | AccessLevelWhereInput[]
    OR?: AccessLevelWhereInput[]
    NOT?: AccessLevelWhereInput | AccessLevelWhereInput[]
    code?: StringFilter<"AccessLevel"> | string
    description?: StringNullableFilter<"AccessLevel"> | string | null
    menus?: MenuAccessLevelListRelationFilter
    groupAccess?: MenuGroupAccessListRelationFilter
  }, "id">

  export type AccessLevelOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: AccessLevelCountOrderByAggregateInput
    _avg?: AccessLevelAvgOrderByAggregateInput
    _max?: AccessLevelMaxOrderByAggregateInput
    _min?: AccessLevelMinOrderByAggregateInput
    _sum?: AccessLevelSumOrderByAggregateInput
  }

  export type AccessLevelScalarWhereWithAggregatesInput = {
    AND?: AccessLevelScalarWhereWithAggregatesInput | AccessLevelScalarWhereWithAggregatesInput[]
    OR?: AccessLevelScalarWhereWithAggregatesInput[]
    NOT?: AccessLevelScalarWhereWithAggregatesInput | AccessLevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccessLevel"> | number
    code?: StringWithAggregatesFilter<"AccessLevel"> | string
    description?: StringNullableWithAggregatesFilter<"AccessLevel"> | string | null
  }

  export type MenuAccessLevelWhereInput = {
    AND?: MenuAccessLevelWhereInput | MenuAccessLevelWhereInput[]
    OR?: MenuAccessLevelWhereInput[]
    NOT?: MenuAccessLevelWhereInput | MenuAccessLevelWhereInput[]
    id?: IntFilter<"MenuAccessLevel"> | number
    menuId?: IntFilter<"MenuAccessLevel"> | number
    accessLevelId?: IntFilter<"MenuAccessLevel"> | number
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
    accessLevel?: XOR<AccessLevelScalarRelationFilter, AccessLevelWhereInput>
  }

  export type MenuAccessLevelOrderByWithRelationInput = {
    id?: SortOrder
    menuId?: SortOrder
    accessLevelId?: SortOrder
    menu?: MenuOrderByWithRelationInput
    accessLevel?: AccessLevelOrderByWithRelationInput
  }

  export type MenuAccessLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    menuId_accessLevelId?: MenuAccessLevelMenuIdAccessLevelIdCompoundUniqueInput
    AND?: MenuAccessLevelWhereInput | MenuAccessLevelWhereInput[]
    OR?: MenuAccessLevelWhereInput[]
    NOT?: MenuAccessLevelWhereInput | MenuAccessLevelWhereInput[]
    menuId?: IntFilter<"MenuAccessLevel"> | number
    accessLevelId?: IntFilter<"MenuAccessLevel"> | number
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
    accessLevel?: XOR<AccessLevelScalarRelationFilter, AccessLevelWhereInput>
  }, "id" | "menuId_accessLevelId">

  export type MenuAccessLevelOrderByWithAggregationInput = {
    id?: SortOrder
    menuId?: SortOrder
    accessLevelId?: SortOrder
    _count?: MenuAccessLevelCountOrderByAggregateInput
    _avg?: MenuAccessLevelAvgOrderByAggregateInput
    _max?: MenuAccessLevelMaxOrderByAggregateInput
    _min?: MenuAccessLevelMinOrderByAggregateInput
    _sum?: MenuAccessLevelSumOrderByAggregateInput
  }

  export type MenuAccessLevelScalarWhereWithAggregatesInput = {
    AND?: MenuAccessLevelScalarWhereWithAggregatesInput | MenuAccessLevelScalarWhereWithAggregatesInput[]
    OR?: MenuAccessLevelScalarWhereWithAggregatesInput[]
    NOT?: MenuAccessLevelScalarWhereWithAggregatesInput | MenuAccessLevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuAccessLevel"> | number
    menuId?: IntWithAggregatesFilter<"MenuAccessLevel"> | number
    accessLevelId?: IntWithAggregatesFilter<"MenuAccessLevel"> | number
  }

  export type MenuGroupAccessWhereInput = {
    AND?: MenuGroupAccessWhereInput | MenuGroupAccessWhereInput[]
    OR?: MenuGroupAccessWhereInput[]
    NOT?: MenuGroupAccessWhereInput | MenuGroupAccessWhereInput[]
    id?: IntFilter<"MenuGroupAccess"> | number
    menuGroupId?: IntFilter<"MenuGroupAccess"> | number
    accessLevelId?: IntFilter<"MenuGroupAccess"> | number
    menuGroup?: XOR<MenuGroupScalarRelationFilter, MenuGroupWhereInput>
    accessLevel?: XOR<AccessLevelScalarRelationFilter, AccessLevelWhereInput>
  }

  export type MenuGroupAccessOrderByWithRelationInput = {
    id?: SortOrder
    menuGroupId?: SortOrder
    accessLevelId?: SortOrder
    menuGroup?: MenuGroupOrderByWithRelationInput
    accessLevel?: AccessLevelOrderByWithRelationInput
  }

  export type MenuGroupAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    menuGroupId_accessLevelId?: MenuGroupAccessMenuGroupIdAccessLevelIdCompoundUniqueInput
    AND?: MenuGroupAccessWhereInput | MenuGroupAccessWhereInput[]
    OR?: MenuGroupAccessWhereInput[]
    NOT?: MenuGroupAccessWhereInput | MenuGroupAccessWhereInput[]
    menuGroupId?: IntFilter<"MenuGroupAccess"> | number
    accessLevelId?: IntFilter<"MenuGroupAccess"> | number
    menuGroup?: XOR<MenuGroupScalarRelationFilter, MenuGroupWhereInput>
    accessLevel?: XOR<AccessLevelScalarRelationFilter, AccessLevelWhereInput>
  }, "id" | "menuGroupId_accessLevelId">

  export type MenuGroupAccessOrderByWithAggregationInput = {
    id?: SortOrder
    menuGroupId?: SortOrder
    accessLevelId?: SortOrder
    _count?: MenuGroupAccessCountOrderByAggregateInput
    _avg?: MenuGroupAccessAvgOrderByAggregateInput
    _max?: MenuGroupAccessMaxOrderByAggregateInput
    _min?: MenuGroupAccessMinOrderByAggregateInput
    _sum?: MenuGroupAccessSumOrderByAggregateInput
  }

  export type MenuGroupAccessScalarWhereWithAggregatesInput = {
    AND?: MenuGroupAccessScalarWhereWithAggregatesInput | MenuGroupAccessScalarWhereWithAggregatesInput[]
    OR?: MenuGroupAccessScalarWhereWithAggregatesInput[]
    NOT?: MenuGroupAccessScalarWhereWithAggregatesInput | MenuGroupAccessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuGroupAccess"> | number
    menuGroupId?: IntWithAggregatesFilter<"MenuGroupAccess"> | number
    accessLevelId?: IntWithAggregatesFilter<"MenuGroupAccess"> | number
  }

  export type UserCreateInput = {
    uuid?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    group: GroupCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    uuid?: string
    email: string
    password: string
    groupId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    group?: GroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    uuid?: string
    email: string
    password: string
    groupId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    users?: UserCreateNestedManyWithoutGroupInput
    menus?: MenuGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
    menus?: MenuGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutGroupNestedInput
    menus?: MenuGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
    menus?: MenuGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    emailSecondary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    emailSecondary?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    emailSecondary?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuGroupCreateInput = {
    isActive?: boolean
    orderNumber?: number
    group: GroupCreateNestedOneWithoutMenusInput
    menu: MenuCreateNestedOneWithoutGroupsInput
    access?: MenuGroupAccessCreateNestedManyWithoutMenuGroupInput
  }

  export type MenuGroupUncheckedCreateInput = {
    id?: number
    groupId: number
    menuId: number
    isActive?: boolean
    orderNumber?: number
    access?: MenuGroupAccessUncheckedCreateNestedManyWithoutMenuGroupInput
  }

  export type MenuGroupUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
    group?: GroupUpdateOneRequiredWithoutMenusNestedInput
    menu?: MenuUpdateOneRequiredWithoutGroupsNestedInput
    access?: MenuGroupAccessUpdateManyWithoutMenuGroupNestedInput
  }

  export type MenuGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
    access?: MenuGroupAccessUncheckedUpdateManyWithoutMenuGroupNestedInput
  }

  export type MenuGroupCreateManyInput = {
    id?: number
    groupId: number
    menuId: number
    isActive?: boolean
    orderNumber?: number
  }

  export type MenuGroupUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
  }

  export type MenuGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
  }

  export type MenuCreateInput = {
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    parent?: MenuCreateNestedOneWithoutChildrenInput
    children?: MenuCreateNestedManyWithoutParentInput
    acls?: MenuAccessLevelCreateNestedManyWithoutMenuInput
    groups?: MenuGroupCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    parentId?: number | null
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    acls?: MenuAccessLevelUncheckedCreateNestedManyWithoutMenuInput
    groups?: MenuGroupUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
    acls?: MenuAccessLevelUpdateManyWithoutMenuNestedInput
    groups?: MenuGroupUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    acls?: MenuAccessLevelUncheckedUpdateManyWithoutMenuNestedInput
    groups?: MenuGroupUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: number
    parentId?: number | null
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type MenuUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLevelCreateInput = {
    code: string
    description?: string | null
    menus?: MenuAccessLevelCreateNestedManyWithoutAccessLevelInput
    groupAccess?: MenuGroupAccessCreateNestedManyWithoutAccessLevelInput
  }

  export type AccessLevelUncheckedCreateInput = {
    id?: number
    code: string
    description?: string | null
    menus?: MenuAccessLevelUncheckedCreateNestedManyWithoutAccessLevelInput
    groupAccess?: MenuGroupAccessUncheckedCreateNestedManyWithoutAccessLevelInput
  }

  export type AccessLevelUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    menus?: MenuAccessLevelUpdateManyWithoutAccessLevelNestedInput
    groupAccess?: MenuGroupAccessUpdateManyWithoutAccessLevelNestedInput
  }

  export type AccessLevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    menus?: MenuAccessLevelUncheckedUpdateManyWithoutAccessLevelNestedInput
    groupAccess?: MenuGroupAccessUncheckedUpdateManyWithoutAccessLevelNestedInput
  }

  export type AccessLevelCreateManyInput = {
    id?: number
    code: string
    description?: string | null
  }

  export type AccessLevelUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenuAccessLevelCreateInput = {
    menu: MenuCreateNestedOneWithoutAclsInput
    accessLevel: AccessLevelCreateNestedOneWithoutMenusInput
  }

  export type MenuAccessLevelUncheckedCreateInput = {
    id?: number
    menuId: number
    accessLevelId: number
  }

  export type MenuAccessLevelUpdateInput = {
    menu?: MenuUpdateOneRequiredWithoutAclsNestedInput
    accessLevel?: AccessLevelUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuAccessLevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    accessLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuAccessLevelCreateManyInput = {
    id?: number
    menuId: number
    accessLevelId: number
  }

  export type MenuAccessLevelUpdateManyMutationInput = {

  }

  export type MenuAccessLevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    accessLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuGroupAccessCreateInput = {
    menuGroup: MenuGroupCreateNestedOneWithoutAccessInput
    accessLevel: AccessLevelCreateNestedOneWithoutGroupAccessInput
  }

  export type MenuGroupAccessUncheckedCreateInput = {
    id?: number
    menuGroupId: number
    accessLevelId: number
  }

  export type MenuGroupAccessUpdateInput = {
    menuGroup?: MenuGroupUpdateOneRequiredWithoutAccessNestedInput
    accessLevel?: AccessLevelUpdateOneRequiredWithoutGroupAccessNestedInput
  }

  export type MenuGroupAccessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuGroupId?: IntFieldUpdateOperationsInput | number
    accessLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuGroupAccessCreateManyInput = {
    id?: number
    menuGroupId: number
    accessLevelId: number
  }

  export type MenuGroupAccessUpdateManyMutationInput = {

  }

  export type MenuGroupAccessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuGroupId?: IntFieldUpdateOperationsInput | number
    accessLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MenuGroupListRelationFilter = {
    every?: MenuGroupWhereInput
    some?: MenuGroupWhereInput
    none?: MenuGroupWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    emailSecondary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    emailSecondary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    emailSecondary?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MenuScalarRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type MenuGroupAccessListRelationFilter = {
    every?: MenuGroupAccessWhereInput
    some?: MenuGroupAccessWhereInput
    none?: MenuGroupAccessWhereInput
  }

  export type MenuGroupAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuGroupGroupIdMenuIdCompoundUniqueInput = {
    groupId: number
    menuId: number
  }

  export type MenuGroupCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    menuId?: SortOrder
    isActive?: SortOrder
    orderNumber?: SortOrder
  }

  export type MenuGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    menuId?: SortOrder
    orderNumber?: SortOrder
  }

  export type MenuGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    menuId?: SortOrder
    isActive?: SortOrder
    orderNumber?: SortOrder
  }

  export type MenuGroupMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    menuId?: SortOrder
    isActive?: SortOrder
    orderNumber?: SortOrder
  }

  export type MenuGroupSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    menuId?: SortOrder
    orderNumber?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MenuNullableScalarRelationFilter = {
    is?: MenuWhereInput | null
    isNot?: MenuWhereInput | null
  }

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type MenuAccessLevelListRelationFilter = {
    every?: MenuAccessLevelWhereInput
    some?: MenuAccessLevelWhereInput
    none?: MenuAccessLevelWhereInput
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuAccessLevelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    description?: SortOrder
    name?: SortOrder
    label?: SortOrder
    icon?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    description?: SortOrder
    name?: SortOrder
    label?: SortOrder
    icon?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    description?: SortOrder
    name?: SortOrder
    label?: SortOrder
    icon?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AccessLevelCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type AccessLevelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccessLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type AccessLevelMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type AccessLevelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccessLevelScalarRelationFilter = {
    is?: AccessLevelWhereInput
    isNot?: AccessLevelWhereInput
  }

  export type MenuAccessLevelMenuIdAccessLevelIdCompoundUniqueInput = {
    menuId: number
    accessLevelId: number
  }

  export type MenuAccessLevelCountOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type MenuAccessLevelAvgOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type MenuAccessLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type MenuAccessLevelMinOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type MenuAccessLevelSumOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type MenuGroupScalarRelationFilter = {
    is?: MenuGroupWhereInput
    isNot?: MenuGroupWhereInput
  }

  export type MenuGroupAccessMenuGroupIdAccessLevelIdCompoundUniqueInput = {
    menuGroupId: number
    accessLevelId: number
  }

  export type MenuGroupAccessCountOrderByAggregateInput = {
    id?: SortOrder
    menuGroupId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type MenuGroupAccessAvgOrderByAggregateInput = {
    id?: SortOrder
    menuGroupId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type MenuGroupAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    menuGroupId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type MenuGroupAccessMinOrderByAggregateInput = {
    id?: SortOrder
    menuGroupId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type MenuGroupAccessSumOrderByAggregateInput = {
    id?: SortOrder
    menuGroupId?: SortOrder
    accessLevelId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    connect?: GroupWhereUniqueInput
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type GroupUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    upsert?: GroupUpsertWithoutUsersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUsersInput, GroupUpdateWithoutUsersInput>, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MenuGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<MenuGroupCreateWithoutGroupInput, MenuGroupUncheckedCreateWithoutGroupInput> | MenuGroupCreateWithoutGroupInput[] | MenuGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MenuGroupCreateOrConnectWithoutGroupInput | MenuGroupCreateOrConnectWithoutGroupInput[]
    createMany?: MenuGroupCreateManyGroupInputEnvelope
    connect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MenuGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<MenuGroupCreateWithoutGroupInput, MenuGroupUncheckedCreateWithoutGroupInput> | MenuGroupCreateWithoutGroupInput[] | MenuGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MenuGroupCreateOrConnectWithoutGroupInput | MenuGroupCreateOrConnectWithoutGroupInput[]
    createMany?: MenuGroupCreateManyGroupInputEnvelope
    connect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MenuGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MenuGroupCreateWithoutGroupInput, MenuGroupUncheckedCreateWithoutGroupInput> | MenuGroupCreateWithoutGroupInput[] | MenuGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MenuGroupCreateOrConnectWithoutGroupInput | MenuGroupCreateOrConnectWithoutGroupInput[]
    upsert?: MenuGroupUpsertWithWhereUniqueWithoutGroupInput | MenuGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MenuGroupCreateManyGroupInputEnvelope
    set?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    disconnect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    delete?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    connect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    update?: MenuGroupUpdateWithWhereUniqueWithoutGroupInput | MenuGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MenuGroupUpdateManyWithWhereWithoutGroupInput | MenuGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MenuGroupScalarWhereInput | MenuGroupScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MenuGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MenuGroupCreateWithoutGroupInput, MenuGroupUncheckedCreateWithoutGroupInput> | MenuGroupCreateWithoutGroupInput[] | MenuGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MenuGroupCreateOrConnectWithoutGroupInput | MenuGroupCreateOrConnectWithoutGroupInput[]
    upsert?: MenuGroupUpsertWithWhereUniqueWithoutGroupInput | MenuGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MenuGroupCreateManyGroupInputEnvelope
    set?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    disconnect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    delete?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    connect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    update?: MenuGroupUpdateWithWhereUniqueWithoutGroupInput | MenuGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MenuGroupUpdateManyWithWhereWithoutGroupInput | MenuGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MenuGroupScalarWhereInput | MenuGroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type GroupCreateNestedOneWithoutMenusInput = {
    create?: XOR<GroupCreateWithoutMenusInput, GroupUncheckedCreateWithoutMenusInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMenusInput
    connect?: GroupWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutGroupsInput = {
    create?: XOR<MenuCreateWithoutGroupsInput, MenuUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutGroupsInput
    connect?: MenuWhereUniqueInput
  }

  export type MenuGroupAccessCreateNestedManyWithoutMenuGroupInput = {
    create?: XOR<MenuGroupAccessCreateWithoutMenuGroupInput, MenuGroupAccessUncheckedCreateWithoutMenuGroupInput> | MenuGroupAccessCreateWithoutMenuGroupInput[] | MenuGroupAccessUncheckedCreateWithoutMenuGroupInput[]
    connectOrCreate?: MenuGroupAccessCreateOrConnectWithoutMenuGroupInput | MenuGroupAccessCreateOrConnectWithoutMenuGroupInput[]
    createMany?: MenuGroupAccessCreateManyMenuGroupInputEnvelope
    connect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
  }

  export type MenuGroupAccessUncheckedCreateNestedManyWithoutMenuGroupInput = {
    create?: XOR<MenuGroupAccessCreateWithoutMenuGroupInput, MenuGroupAccessUncheckedCreateWithoutMenuGroupInput> | MenuGroupAccessCreateWithoutMenuGroupInput[] | MenuGroupAccessUncheckedCreateWithoutMenuGroupInput[]
    connectOrCreate?: MenuGroupAccessCreateOrConnectWithoutMenuGroupInput | MenuGroupAccessCreateOrConnectWithoutMenuGroupInput[]
    createMany?: MenuGroupAccessCreateManyMenuGroupInputEnvelope
    connect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GroupUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<GroupCreateWithoutMenusInput, GroupUncheckedCreateWithoutMenusInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMenusInput
    upsert?: GroupUpsertWithoutMenusInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMenusInput, GroupUpdateWithoutMenusInput>, GroupUncheckedUpdateWithoutMenusInput>
  }

  export type MenuUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<MenuCreateWithoutGroupsInput, MenuUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutGroupsInput
    upsert?: MenuUpsertWithoutGroupsInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutGroupsInput, MenuUpdateWithoutGroupsInput>, MenuUncheckedUpdateWithoutGroupsInput>
  }

  export type MenuGroupAccessUpdateManyWithoutMenuGroupNestedInput = {
    create?: XOR<MenuGroupAccessCreateWithoutMenuGroupInput, MenuGroupAccessUncheckedCreateWithoutMenuGroupInput> | MenuGroupAccessCreateWithoutMenuGroupInput[] | MenuGroupAccessUncheckedCreateWithoutMenuGroupInput[]
    connectOrCreate?: MenuGroupAccessCreateOrConnectWithoutMenuGroupInput | MenuGroupAccessCreateOrConnectWithoutMenuGroupInput[]
    upsert?: MenuGroupAccessUpsertWithWhereUniqueWithoutMenuGroupInput | MenuGroupAccessUpsertWithWhereUniqueWithoutMenuGroupInput[]
    createMany?: MenuGroupAccessCreateManyMenuGroupInputEnvelope
    set?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    disconnect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    delete?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    connect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    update?: MenuGroupAccessUpdateWithWhereUniqueWithoutMenuGroupInput | MenuGroupAccessUpdateWithWhereUniqueWithoutMenuGroupInput[]
    updateMany?: MenuGroupAccessUpdateManyWithWhereWithoutMenuGroupInput | MenuGroupAccessUpdateManyWithWhereWithoutMenuGroupInput[]
    deleteMany?: MenuGroupAccessScalarWhereInput | MenuGroupAccessScalarWhereInput[]
  }

  export type MenuGroupAccessUncheckedUpdateManyWithoutMenuGroupNestedInput = {
    create?: XOR<MenuGroupAccessCreateWithoutMenuGroupInput, MenuGroupAccessUncheckedCreateWithoutMenuGroupInput> | MenuGroupAccessCreateWithoutMenuGroupInput[] | MenuGroupAccessUncheckedCreateWithoutMenuGroupInput[]
    connectOrCreate?: MenuGroupAccessCreateOrConnectWithoutMenuGroupInput | MenuGroupAccessCreateOrConnectWithoutMenuGroupInput[]
    upsert?: MenuGroupAccessUpsertWithWhereUniqueWithoutMenuGroupInput | MenuGroupAccessUpsertWithWhereUniqueWithoutMenuGroupInput[]
    createMany?: MenuGroupAccessCreateManyMenuGroupInputEnvelope
    set?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    disconnect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    delete?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    connect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    update?: MenuGroupAccessUpdateWithWhereUniqueWithoutMenuGroupInput | MenuGroupAccessUpdateWithWhereUniqueWithoutMenuGroupInput[]
    updateMany?: MenuGroupAccessUpdateManyWithWhereWithoutMenuGroupInput | MenuGroupAccessUpdateManyWithWhereWithoutMenuGroupInput[]
    deleteMany?: MenuGroupAccessScalarWhereInput | MenuGroupAccessScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutChildrenInput = {
    create?: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MenuCreateOrConnectWithoutChildrenInput
    connect?: MenuWhereUniqueInput
  }

  export type MenuCreateNestedManyWithoutParentInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type MenuAccessLevelCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuAccessLevelCreateWithoutMenuInput, MenuAccessLevelUncheckedCreateWithoutMenuInput> | MenuAccessLevelCreateWithoutMenuInput[] | MenuAccessLevelUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuAccessLevelCreateOrConnectWithoutMenuInput | MenuAccessLevelCreateOrConnectWithoutMenuInput[]
    createMany?: MenuAccessLevelCreateManyMenuInputEnvelope
    connect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
  }

  export type MenuGroupCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuGroupCreateWithoutMenuInput, MenuGroupUncheckedCreateWithoutMenuInput> | MenuGroupCreateWithoutMenuInput[] | MenuGroupUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuGroupCreateOrConnectWithoutMenuInput | MenuGroupCreateOrConnectWithoutMenuInput[]
    createMany?: MenuGroupCreateManyMenuInputEnvelope
    connect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type MenuAccessLevelUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuAccessLevelCreateWithoutMenuInput, MenuAccessLevelUncheckedCreateWithoutMenuInput> | MenuAccessLevelCreateWithoutMenuInput[] | MenuAccessLevelUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuAccessLevelCreateOrConnectWithoutMenuInput | MenuAccessLevelCreateOrConnectWithoutMenuInput[]
    createMany?: MenuAccessLevelCreateManyMenuInputEnvelope
    connect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
  }

  export type MenuGroupUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuGroupCreateWithoutMenuInput, MenuGroupUncheckedCreateWithoutMenuInput> | MenuGroupCreateWithoutMenuInput[] | MenuGroupUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuGroupCreateOrConnectWithoutMenuInput | MenuGroupCreateOrConnectWithoutMenuInput[]
    createMany?: MenuGroupCreateManyMenuInputEnvelope
    connect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
  }

  export type MenuUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MenuCreateOrConnectWithoutChildrenInput
    upsert?: MenuUpsertWithoutChildrenInput
    disconnect?: MenuWhereInput | boolean
    delete?: MenuWhereInput | boolean
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutChildrenInput, MenuUpdateWithoutChildrenInput>, MenuUncheckedUpdateWithoutChildrenInput>
  }

  export type MenuUpdateManyWithoutParentNestedInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutParentInput | MenuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutParentInput | MenuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutParentInput | MenuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type MenuAccessLevelUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuAccessLevelCreateWithoutMenuInput, MenuAccessLevelUncheckedCreateWithoutMenuInput> | MenuAccessLevelCreateWithoutMenuInput[] | MenuAccessLevelUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuAccessLevelCreateOrConnectWithoutMenuInput | MenuAccessLevelCreateOrConnectWithoutMenuInput[]
    upsert?: MenuAccessLevelUpsertWithWhereUniqueWithoutMenuInput | MenuAccessLevelUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuAccessLevelCreateManyMenuInputEnvelope
    set?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    disconnect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    delete?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    connect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    update?: MenuAccessLevelUpdateWithWhereUniqueWithoutMenuInput | MenuAccessLevelUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuAccessLevelUpdateManyWithWhereWithoutMenuInput | MenuAccessLevelUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuAccessLevelScalarWhereInput | MenuAccessLevelScalarWhereInput[]
  }

  export type MenuGroupUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuGroupCreateWithoutMenuInput, MenuGroupUncheckedCreateWithoutMenuInput> | MenuGroupCreateWithoutMenuInput[] | MenuGroupUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuGroupCreateOrConnectWithoutMenuInput | MenuGroupCreateOrConnectWithoutMenuInput[]
    upsert?: MenuGroupUpsertWithWhereUniqueWithoutMenuInput | MenuGroupUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuGroupCreateManyMenuInputEnvelope
    set?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    disconnect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    delete?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    connect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    update?: MenuGroupUpdateWithWhereUniqueWithoutMenuInput | MenuGroupUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuGroupUpdateManyWithWhereWithoutMenuInput | MenuGroupUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuGroupScalarWhereInput | MenuGroupScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutParentInput | MenuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutParentInput | MenuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutParentInput | MenuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type MenuAccessLevelUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuAccessLevelCreateWithoutMenuInput, MenuAccessLevelUncheckedCreateWithoutMenuInput> | MenuAccessLevelCreateWithoutMenuInput[] | MenuAccessLevelUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuAccessLevelCreateOrConnectWithoutMenuInput | MenuAccessLevelCreateOrConnectWithoutMenuInput[]
    upsert?: MenuAccessLevelUpsertWithWhereUniqueWithoutMenuInput | MenuAccessLevelUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuAccessLevelCreateManyMenuInputEnvelope
    set?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    disconnect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    delete?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    connect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    update?: MenuAccessLevelUpdateWithWhereUniqueWithoutMenuInput | MenuAccessLevelUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuAccessLevelUpdateManyWithWhereWithoutMenuInput | MenuAccessLevelUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuAccessLevelScalarWhereInput | MenuAccessLevelScalarWhereInput[]
  }

  export type MenuGroupUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuGroupCreateWithoutMenuInput, MenuGroupUncheckedCreateWithoutMenuInput> | MenuGroupCreateWithoutMenuInput[] | MenuGroupUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuGroupCreateOrConnectWithoutMenuInput | MenuGroupCreateOrConnectWithoutMenuInput[]
    upsert?: MenuGroupUpsertWithWhereUniqueWithoutMenuInput | MenuGroupUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuGroupCreateManyMenuInputEnvelope
    set?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    disconnect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    delete?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    connect?: MenuGroupWhereUniqueInput | MenuGroupWhereUniqueInput[]
    update?: MenuGroupUpdateWithWhereUniqueWithoutMenuInput | MenuGroupUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuGroupUpdateManyWithWhereWithoutMenuInput | MenuGroupUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuGroupScalarWhereInput | MenuGroupScalarWhereInput[]
  }

  export type MenuAccessLevelCreateNestedManyWithoutAccessLevelInput = {
    create?: XOR<MenuAccessLevelCreateWithoutAccessLevelInput, MenuAccessLevelUncheckedCreateWithoutAccessLevelInput> | MenuAccessLevelCreateWithoutAccessLevelInput[] | MenuAccessLevelUncheckedCreateWithoutAccessLevelInput[]
    connectOrCreate?: MenuAccessLevelCreateOrConnectWithoutAccessLevelInput | MenuAccessLevelCreateOrConnectWithoutAccessLevelInput[]
    createMany?: MenuAccessLevelCreateManyAccessLevelInputEnvelope
    connect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
  }

  export type MenuGroupAccessCreateNestedManyWithoutAccessLevelInput = {
    create?: XOR<MenuGroupAccessCreateWithoutAccessLevelInput, MenuGroupAccessUncheckedCreateWithoutAccessLevelInput> | MenuGroupAccessCreateWithoutAccessLevelInput[] | MenuGroupAccessUncheckedCreateWithoutAccessLevelInput[]
    connectOrCreate?: MenuGroupAccessCreateOrConnectWithoutAccessLevelInput | MenuGroupAccessCreateOrConnectWithoutAccessLevelInput[]
    createMany?: MenuGroupAccessCreateManyAccessLevelInputEnvelope
    connect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
  }

  export type MenuAccessLevelUncheckedCreateNestedManyWithoutAccessLevelInput = {
    create?: XOR<MenuAccessLevelCreateWithoutAccessLevelInput, MenuAccessLevelUncheckedCreateWithoutAccessLevelInput> | MenuAccessLevelCreateWithoutAccessLevelInput[] | MenuAccessLevelUncheckedCreateWithoutAccessLevelInput[]
    connectOrCreate?: MenuAccessLevelCreateOrConnectWithoutAccessLevelInput | MenuAccessLevelCreateOrConnectWithoutAccessLevelInput[]
    createMany?: MenuAccessLevelCreateManyAccessLevelInputEnvelope
    connect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
  }

  export type MenuGroupAccessUncheckedCreateNestedManyWithoutAccessLevelInput = {
    create?: XOR<MenuGroupAccessCreateWithoutAccessLevelInput, MenuGroupAccessUncheckedCreateWithoutAccessLevelInput> | MenuGroupAccessCreateWithoutAccessLevelInput[] | MenuGroupAccessUncheckedCreateWithoutAccessLevelInput[]
    connectOrCreate?: MenuGroupAccessCreateOrConnectWithoutAccessLevelInput | MenuGroupAccessCreateOrConnectWithoutAccessLevelInput[]
    createMany?: MenuGroupAccessCreateManyAccessLevelInputEnvelope
    connect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
  }

  export type MenuAccessLevelUpdateManyWithoutAccessLevelNestedInput = {
    create?: XOR<MenuAccessLevelCreateWithoutAccessLevelInput, MenuAccessLevelUncheckedCreateWithoutAccessLevelInput> | MenuAccessLevelCreateWithoutAccessLevelInput[] | MenuAccessLevelUncheckedCreateWithoutAccessLevelInput[]
    connectOrCreate?: MenuAccessLevelCreateOrConnectWithoutAccessLevelInput | MenuAccessLevelCreateOrConnectWithoutAccessLevelInput[]
    upsert?: MenuAccessLevelUpsertWithWhereUniqueWithoutAccessLevelInput | MenuAccessLevelUpsertWithWhereUniqueWithoutAccessLevelInput[]
    createMany?: MenuAccessLevelCreateManyAccessLevelInputEnvelope
    set?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    disconnect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    delete?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    connect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    update?: MenuAccessLevelUpdateWithWhereUniqueWithoutAccessLevelInput | MenuAccessLevelUpdateWithWhereUniqueWithoutAccessLevelInput[]
    updateMany?: MenuAccessLevelUpdateManyWithWhereWithoutAccessLevelInput | MenuAccessLevelUpdateManyWithWhereWithoutAccessLevelInput[]
    deleteMany?: MenuAccessLevelScalarWhereInput | MenuAccessLevelScalarWhereInput[]
  }

  export type MenuGroupAccessUpdateManyWithoutAccessLevelNestedInput = {
    create?: XOR<MenuGroupAccessCreateWithoutAccessLevelInput, MenuGroupAccessUncheckedCreateWithoutAccessLevelInput> | MenuGroupAccessCreateWithoutAccessLevelInput[] | MenuGroupAccessUncheckedCreateWithoutAccessLevelInput[]
    connectOrCreate?: MenuGroupAccessCreateOrConnectWithoutAccessLevelInput | MenuGroupAccessCreateOrConnectWithoutAccessLevelInput[]
    upsert?: MenuGroupAccessUpsertWithWhereUniqueWithoutAccessLevelInput | MenuGroupAccessUpsertWithWhereUniqueWithoutAccessLevelInput[]
    createMany?: MenuGroupAccessCreateManyAccessLevelInputEnvelope
    set?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    disconnect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    delete?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    connect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    update?: MenuGroupAccessUpdateWithWhereUniqueWithoutAccessLevelInput | MenuGroupAccessUpdateWithWhereUniqueWithoutAccessLevelInput[]
    updateMany?: MenuGroupAccessUpdateManyWithWhereWithoutAccessLevelInput | MenuGroupAccessUpdateManyWithWhereWithoutAccessLevelInput[]
    deleteMany?: MenuGroupAccessScalarWhereInput | MenuGroupAccessScalarWhereInput[]
  }

  export type MenuAccessLevelUncheckedUpdateManyWithoutAccessLevelNestedInput = {
    create?: XOR<MenuAccessLevelCreateWithoutAccessLevelInput, MenuAccessLevelUncheckedCreateWithoutAccessLevelInput> | MenuAccessLevelCreateWithoutAccessLevelInput[] | MenuAccessLevelUncheckedCreateWithoutAccessLevelInput[]
    connectOrCreate?: MenuAccessLevelCreateOrConnectWithoutAccessLevelInput | MenuAccessLevelCreateOrConnectWithoutAccessLevelInput[]
    upsert?: MenuAccessLevelUpsertWithWhereUniqueWithoutAccessLevelInput | MenuAccessLevelUpsertWithWhereUniqueWithoutAccessLevelInput[]
    createMany?: MenuAccessLevelCreateManyAccessLevelInputEnvelope
    set?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    disconnect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    delete?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    connect?: MenuAccessLevelWhereUniqueInput | MenuAccessLevelWhereUniqueInput[]
    update?: MenuAccessLevelUpdateWithWhereUniqueWithoutAccessLevelInput | MenuAccessLevelUpdateWithWhereUniqueWithoutAccessLevelInput[]
    updateMany?: MenuAccessLevelUpdateManyWithWhereWithoutAccessLevelInput | MenuAccessLevelUpdateManyWithWhereWithoutAccessLevelInput[]
    deleteMany?: MenuAccessLevelScalarWhereInput | MenuAccessLevelScalarWhereInput[]
  }

  export type MenuGroupAccessUncheckedUpdateManyWithoutAccessLevelNestedInput = {
    create?: XOR<MenuGroupAccessCreateWithoutAccessLevelInput, MenuGroupAccessUncheckedCreateWithoutAccessLevelInput> | MenuGroupAccessCreateWithoutAccessLevelInput[] | MenuGroupAccessUncheckedCreateWithoutAccessLevelInput[]
    connectOrCreate?: MenuGroupAccessCreateOrConnectWithoutAccessLevelInput | MenuGroupAccessCreateOrConnectWithoutAccessLevelInput[]
    upsert?: MenuGroupAccessUpsertWithWhereUniqueWithoutAccessLevelInput | MenuGroupAccessUpsertWithWhereUniqueWithoutAccessLevelInput[]
    createMany?: MenuGroupAccessCreateManyAccessLevelInputEnvelope
    set?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    disconnect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    delete?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    connect?: MenuGroupAccessWhereUniqueInput | MenuGroupAccessWhereUniqueInput[]
    update?: MenuGroupAccessUpdateWithWhereUniqueWithoutAccessLevelInput | MenuGroupAccessUpdateWithWhereUniqueWithoutAccessLevelInput[]
    updateMany?: MenuGroupAccessUpdateManyWithWhereWithoutAccessLevelInput | MenuGroupAccessUpdateManyWithWhereWithoutAccessLevelInput[]
    deleteMany?: MenuGroupAccessScalarWhereInput | MenuGroupAccessScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutAclsInput = {
    create?: XOR<MenuCreateWithoutAclsInput, MenuUncheckedCreateWithoutAclsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutAclsInput
    connect?: MenuWhereUniqueInput
  }

  export type AccessLevelCreateNestedOneWithoutMenusInput = {
    create?: XOR<AccessLevelCreateWithoutMenusInput, AccessLevelUncheckedCreateWithoutMenusInput>
    connectOrCreate?: AccessLevelCreateOrConnectWithoutMenusInput
    connect?: AccessLevelWhereUniqueInput
  }

  export type MenuUpdateOneRequiredWithoutAclsNestedInput = {
    create?: XOR<MenuCreateWithoutAclsInput, MenuUncheckedCreateWithoutAclsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutAclsInput
    upsert?: MenuUpsertWithoutAclsInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutAclsInput, MenuUpdateWithoutAclsInput>, MenuUncheckedUpdateWithoutAclsInput>
  }

  export type AccessLevelUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<AccessLevelCreateWithoutMenusInput, AccessLevelUncheckedCreateWithoutMenusInput>
    connectOrCreate?: AccessLevelCreateOrConnectWithoutMenusInput
    upsert?: AccessLevelUpsertWithoutMenusInput
    connect?: AccessLevelWhereUniqueInput
    update?: XOR<XOR<AccessLevelUpdateToOneWithWhereWithoutMenusInput, AccessLevelUpdateWithoutMenusInput>, AccessLevelUncheckedUpdateWithoutMenusInput>
  }

  export type MenuGroupCreateNestedOneWithoutAccessInput = {
    create?: XOR<MenuGroupCreateWithoutAccessInput, MenuGroupUncheckedCreateWithoutAccessInput>
    connectOrCreate?: MenuGroupCreateOrConnectWithoutAccessInput
    connect?: MenuGroupWhereUniqueInput
  }

  export type AccessLevelCreateNestedOneWithoutGroupAccessInput = {
    create?: XOR<AccessLevelCreateWithoutGroupAccessInput, AccessLevelUncheckedCreateWithoutGroupAccessInput>
    connectOrCreate?: AccessLevelCreateOrConnectWithoutGroupAccessInput
    connect?: AccessLevelWhereUniqueInput
  }

  export type MenuGroupUpdateOneRequiredWithoutAccessNestedInput = {
    create?: XOR<MenuGroupCreateWithoutAccessInput, MenuGroupUncheckedCreateWithoutAccessInput>
    connectOrCreate?: MenuGroupCreateOrConnectWithoutAccessInput
    upsert?: MenuGroupUpsertWithoutAccessInput
    connect?: MenuGroupWhereUniqueInput
    update?: XOR<XOR<MenuGroupUpdateToOneWithWhereWithoutAccessInput, MenuGroupUpdateWithoutAccessInput>, MenuGroupUncheckedUpdateWithoutAccessInput>
  }

  export type AccessLevelUpdateOneRequiredWithoutGroupAccessNestedInput = {
    create?: XOR<AccessLevelCreateWithoutGroupAccessInput, AccessLevelUncheckedCreateWithoutGroupAccessInput>
    connectOrCreate?: AccessLevelCreateOrConnectWithoutGroupAccessInput
    upsert?: AccessLevelUpsertWithoutGroupAccessInput
    connect?: AccessLevelWhereUniqueInput
    update?: XOR<XOR<AccessLevelUpdateToOneWithWhereWithoutGroupAccessInput, AccessLevelUpdateWithoutGroupAccessInput>, AccessLevelUncheckedUpdateWithoutGroupAccessInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileCreateWithoutUserInput = {
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    emailSecondary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    emailSecondary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type GroupCreateWithoutUsersInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    menus?: MenuGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    menus?: MenuGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailSecondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpsertWithoutUsersInput = {
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUsersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    menus?: MenuGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    menus?: MenuGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutGroupInput = {
    uuid?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupInput = {
    id?: number
    uuid?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserCreateManyGroupInputEnvelope = {
    data: UserCreateManyGroupInput | UserCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type MenuGroupCreateWithoutGroupInput = {
    isActive?: boolean
    orderNumber?: number
    menu: MenuCreateNestedOneWithoutGroupsInput
    access?: MenuGroupAccessCreateNestedManyWithoutMenuGroupInput
  }

  export type MenuGroupUncheckedCreateWithoutGroupInput = {
    id?: number
    menuId: number
    isActive?: boolean
    orderNumber?: number
    access?: MenuGroupAccessUncheckedCreateNestedManyWithoutMenuGroupInput
  }

  export type MenuGroupCreateOrConnectWithoutGroupInput = {
    where: MenuGroupWhereUniqueInput
    create: XOR<MenuGroupCreateWithoutGroupInput, MenuGroupUncheckedCreateWithoutGroupInput>
  }

  export type MenuGroupCreateManyGroupInputEnvelope = {
    data: MenuGroupCreateManyGroupInput | MenuGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    uuid?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    groupId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type MenuGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: MenuGroupWhereUniqueInput
    update: XOR<MenuGroupUpdateWithoutGroupInput, MenuGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<MenuGroupCreateWithoutGroupInput, MenuGroupUncheckedCreateWithoutGroupInput>
  }

  export type MenuGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: MenuGroupWhereUniqueInput
    data: XOR<MenuGroupUpdateWithoutGroupInput, MenuGroupUncheckedUpdateWithoutGroupInput>
  }

  export type MenuGroupUpdateManyWithWhereWithoutGroupInput = {
    where: MenuGroupScalarWhereInput
    data: XOR<MenuGroupUpdateManyMutationInput, MenuGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type MenuGroupScalarWhereInput = {
    AND?: MenuGroupScalarWhereInput | MenuGroupScalarWhereInput[]
    OR?: MenuGroupScalarWhereInput[]
    NOT?: MenuGroupScalarWhereInput | MenuGroupScalarWhereInput[]
    id?: IntFilter<"MenuGroup"> | number
    groupId?: IntFilter<"MenuGroup"> | number
    menuId?: IntFilter<"MenuGroup"> | number
    isActive?: BoolFilter<"MenuGroup"> | boolean
    orderNumber?: IntFilter<"MenuGroup"> | number
  }

  export type UserCreateWithoutProfileInput = {
    uuid?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    uuid?: string
    email: string
    password: string
    groupId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupCreateWithoutMenusInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    users?: UserCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMenusInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMenusInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMenusInput, GroupUncheckedCreateWithoutMenusInput>
  }

  export type MenuCreateWithoutGroupsInput = {
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    parent?: MenuCreateNestedOneWithoutChildrenInput
    children?: MenuCreateNestedManyWithoutParentInput
    acls?: MenuAccessLevelCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutGroupsInput = {
    id?: number
    parentId?: number | null
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    acls?: MenuAccessLevelUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutGroupsInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutGroupsInput, MenuUncheckedCreateWithoutGroupsInput>
  }

  export type MenuGroupAccessCreateWithoutMenuGroupInput = {
    accessLevel: AccessLevelCreateNestedOneWithoutGroupAccessInput
  }

  export type MenuGroupAccessUncheckedCreateWithoutMenuGroupInput = {
    id?: number
    accessLevelId: number
  }

  export type MenuGroupAccessCreateOrConnectWithoutMenuGroupInput = {
    where: MenuGroupAccessWhereUniqueInput
    create: XOR<MenuGroupAccessCreateWithoutMenuGroupInput, MenuGroupAccessUncheckedCreateWithoutMenuGroupInput>
  }

  export type MenuGroupAccessCreateManyMenuGroupInputEnvelope = {
    data: MenuGroupAccessCreateManyMenuGroupInput | MenuGroupAccessCreateManyMenuGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutMenusInput = {
    update: XOR<GroupUpdateWithoutMenusInput, GroupUncheckedUpdateWithoutMenusInput>
    create: XOR<GroupCreateWithoutMenusInput, GroupUncheckedCreateWithoutMenusInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMenusInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMenusInput, GroupUncheckedUpdateWithoutMenusInput>
  }

  export type GroupUpdateWithoutMenusInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type MenuUpsertWithoutGroupsInput = {
    update: XOR<MenuUpdateWithoutGroupsInput, MenuUncheckedUpdateWithoutGroupsInput>
    create: XOR<MenuCreateWithoutGroupsInput, MenuUncheckedCreateWithoutGroupsInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutGroupsInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutGroupsInput, MenuUncheckedUpdateWithoutGroupsInput>
  }

  export type MenuUpdateWithoutGroupsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
    acls?: MenuAccessLevelUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    acls?: MenuAccessLevelUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuGroupAccessUpsertWithWhereUniqueWithoutMenuGroupInput = {
    where: MenuGroupAccessWhereUniqueInput
    update: XOR<MenuGroupAccessUpdateWithoutMenuGroupInput, MenuGroupAccessUncheckedUpdateWithoutMenuGroupInput>
    create: XOR<MenuGroupAccessCreateWithoutMenuGroupInput, MenuGroupAccessUncheckedCreateWithoutMenuGroupInput>
  }

  export type MenuGroupAccessUpdateWithWhereUniqueWithoutMenuGroupInput = {
    where: MenuGroupAccessWhereUniqueInput
    data: XOR<MenuGroupAccessUpdateWithoutMenuGroupInput, MenuGroupAccessUncheckedUpdateWithoutMenuGroupInput>
  }

  export type MenuGroupAccessUpdateManyWithWhereWithoutMenuGroupInput = {
    where: MenuGroupAccessScalarWhereInput
    data: XOR<MenuGroupAccessUpdateManyMutationInput, MenuGroupAccessUncheckedUpdateManyWithoutMenuGroupInput>
  }

  export type MenuGroupAccessScalarWhereInput = {
    AND?: MenuGroupAccessScalarWhereInput | MenuGroupAccessScalarWhereInput[]
    OR?: MenuGroupAccessScalarWhereInput[]
    NOT?: MenuGroupAccessScalarWhereInput | MenuGroupAccessScalarWhereInput[]
    id?: IntFilter<"MenuGroupAccess"> | number
    menuGroupId?: IntFilter<"MenuGroupAccess"> | number
    accessLevelId?: IntFilter<"MenuGroupAccess"> | number
  }

  export type MenuCreateWithoutChildrenInput = {
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    parent?: MenuCreateNestedOneWithoutChildrenInput
    acls?: MenuAccessLevelCreateNestedManyWithoutMenuInput
    groups?: MenuGroupCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutChildrenInput = {
    id?: number
    parentId?: number | null
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    acls?: MenuAccessLevelUncheckedCreateNestedManyWithoutMenuInput
    groups?: MenuGroupUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutChildrenInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
  }

  export type MenuCreateWithoutParentInput = {
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    children?: MenuCreateNestedManyWithoutParentInput
    acls?: MenuAccessLevelCreateNestedManyWithoutMenuInput
    groups?: MenuGroupCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutParentInput = {
    id?: number
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    acls?: MenuAccessLevelUncheckedCreateNestedManyWithoutMenuInput
    groups?: MenuGroupUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutParentInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput>
  }

  export type MenuCreateManyParentInputEnvelope = {
    data: MenuCreateManyParentInput | MenuCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type MenuAccessLevelCreateWithoutMenuInput = {
    accessLevel: AccessLevelCreateNestedOneWithoutMenusInput
  }

  export type MenuAccessLevelUncheckedCreateWithoutMenuInput = {
    id?: number
    accessLevelId: number
  }

  export type MenuAccessLevelCreateOrConnectWithoutMenuInput = {
    where: MenuAccessLevelWhereUniqueInput
    create: XOR<MenuAccessLevelCreateWithoutMenuInput, MenuAccessLevelUncheckedCreateWithoutMenuInput>
  }

  export type MenuAccessLevelCreateManyMenuInputEnvelope = {
    data: MenuAccessLevelCreateManyMenuInput | MenuAccessLevelCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type MenuGroupCreateWithoutMenuInput = {
    isActive?: boolean
    orderNumber?: number
    group: GroupCreateNestedOneWithoutMenusInput
    access?: MenuGroupAccessCreateNestedManyWithoutMenuGroupInput
  }

  export type MenuGroupUncheckedCreateWithoutMenuInput = {
    id?: number
    groupId: number
    isActive?: boolean
    orderNumber?: number
    access?: MenuGroupAccessUncheckedCreateNestedManyWithoutMenuGroupInput
  }

  export type MenuGroupCreateOrConnectWithoutMenuInput = {
    where: MenuGroupWhereUniqueInput
    create: XOR<MenuGroupCreateWithoutMenuInput, MenuGroupUncheckedCreateWithoutMenuInput>
  }

  export type MenuGroupCreateManyMenuInputEnvelope = {
    data: MenuGroupCreateManyMenuInput | MenuGroupCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type MenuUpsertWithoutChildrenInput = {
    update: XOR<MenuUpdateWithoutChildrenInput, MenuUncheckedUpdateWithoutChildrenInput>
    create: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutChildrenInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutChildrenInput, MenuUncheckedUpdateWithoutChildrenInput>
  }

  export type MenuUpdateWithoutChildrenInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    acls?: MenuAccessLevelUpdateManyWithoutMenuNestedInput
    groups?: MenuGroupUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    acls?: MenuAccessLevelUncheckedUpdateManyWithoutMenuNestedInput
    groups?: MenuGroupUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUpsertWithWhereUniqueWithoutParentInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutParentInput, MenuUncheckedUpdateWithoutParentInput>
    create: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutParentInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutParentInput, MenuUncheckedUpdateWithoutParentInput>
  }

  export type MenuUpdateManyWithWhereWithoutParentInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutParentInput>
  }

  export type MenuScalarWhereInput = {
    AND?: MenuScalarWhereInput | MenuScalarWhereInput[]
    OR?: MenuScalarWhereInput[]
    NOT?: MenuScalarWhereInput | MenuScalarWhereInput[]
    id?: IntFilter<"Menu"> | number
    parentId?: IntNullableFilter<"Menu"> | number | null
    description?: StringNullableFilter<"Menu"> | string | null
    name?: StringFilter<"Menu"> | string
    label?: StringFilter<"Menu"> | string
    icon?: StringNullableFilter<"Menu"> | string | null
    path?: StringFilter<"Menu"> | string
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    deletedBy?: StringNullableFilter<"Menu"> | string | null
  }

  export type MenuAccessLevelUpsertWithWhereUniqueWithoutMenuInput = {
    where: MenuAccessLevelWhereUniqueInput
    update: XOR<MenuAccessLevelUpdateWithoutMenuInput, MenuAccessLevelUncheckedUpdateWithoutMenuInput>
    create: XOR<MenuAccessLevelCreateWithoutMenuInput, MenuAccessLevelUncheckedCreateWithoutMenuInput>
  }

  export type MenuAccessLevelUpdateWithWhereUniqueWithoutMenuInput = {
    where: MenuAccessLevelWhereUniqueInput
    data: XOR<MenuAccessLevelUpdateWithoutMenuInput, MenuAccessLevelUncheckedUpdateWithoutMenuInput>
  }

  export type MenuAccessLevelUpdateManyWithWhereWithoutMenuInput = {
    where: MenuAccessLevelScalarWhereInput
    data: XOR<MenuAccessLevelUpdateManyMutationInput, MenuAccessLevelUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuAccessLevelScalarWhereInput = {
    AND?: MenuAccessLevelScalarWhereInput | MenuAccessLevelScalarWhereInput[]
    OR?: MenuAccessLevelScalarWhereInput[]
    NOT?: MenuAccessLevelScalarWhereInput | MenuAccessLevelScalarWhereInput[]
    id?: IntFilter<"MenuAccessLevel"> | number
    menuId?: IntFilter<"MenuAccessLevel"> | number
    accessLevelId?: IntFilter<"MenuAccessLevel"> | number
  }

  export type MenuGroupUpsertWithWhereUniqueWithoutMenuInput = {
    where: MenuGroupWhereUniqueInput
    update: XOR<MenuGroupUpdateWithoutMenuInput, MenuGroupUncheckedUpdateWithoutMenuInput>
    create: XOR<MenuGroupCreateWithoutMenuInput, MenuGroupUncheckedCreateWithoutMenuInput>
  }

  export type MenuGroupUpdateWithWhereUniqueWithoutMenuInput = {
    where: MenuGroupWhereUniqueInput
    data: XOR<MenuGroupUpdateWithoutMenuInput, MenuGroupUncheckedUpdateWithoutMenuInput>
  }

  export type MenuGroupUpdateManyWithWhereWithoutMenuInput = {
    where: MenuGroupScalarWhereInput
    data: XOR<MenuGroupUpdateManyMutationInput, MenuGroupUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuAccessLevelCreateWithoutAccessLevelInput = {
    menu: MenuCreateNestedOneWithoutAclsInput
  }

  export type MenuAccessLevelUncheckedCreateWithoutAccessLevelInput = {
    id?: number
    menuId: number
  }

  export type MenuAccessLevelCreateOrConnectWithoutAccessLevelInput = {
    where: MenuAccessLevelWhereUniqueInput
    create: XOR<MenuAccessLevelCreateWithoutAccessLevelInput, MenuAccessLevelUncheckedCreateWithoutAccessLevelInput>
  }

  export type MenuAccessLevelCreateManyAccessLevelInputEnvelope = {
    data: MenuAccessLevelCreateManyAccessLevelInput | MenuAccessLevelCreateManyAccessLevelInput[]
    skipDuplicates?: boolean
  }

  export type MenuGroupAccessCreateWithoutAccessLevelInput = {
    menuGroup: MenuGroupCreateNestedOneWithoutAccessInput
  }

  export type MenuGroupAccessUncheckedCreateWithoutAccessLevelInput = {
    id?: number
    menuGroupId: number
  }

  export type MenuGroupAccessCreateOrConnectWithoutAccessLevelInput = {
    where: MenuGroupAccessWhereUniqueInput
    create: XOR<MenuGroupAccessCreateWithoutAccessLevelInput, MenuGroupAccessUncheckedCreateWithoutAccessLevelInput>
  }

  export type MenuGroupAccessCreateManyAccessLevelInputEnvelope = {
    data: MenuGroupAccessCreateManyAccessLevelInput | MenuGroupAccessCreateManyAccessLevelInput[]
    skipDuplicates?: boolean
  }

  export type MenuAccessLevelUpsertWithWhereUniqueWithoutAccessLevelInput = {
    where: MenuAccessLevelWhereUniqueInput
    update: XOR<MenuAccessLevelUpdateWithoutAccessLevelInput, MenuAccessLevelUncheckedUpdateWithoutAccessLevelInput>
    create: XOR<MenuAccessLevelCreateWithoutAccessLevelInput, MenuAccessLevelUncheckedCreateWithoutAccessLevelInput>
  }

  export type MenuAccessLevelUpdateWithWhereUniqueWithoutAccessLevelInput = {
    where: MenuAccessLevelWhereUniqueInput
    data: XOR<MenuAccessLevelUpdateWithoutAccessLevelInput, MenuAccessLevelUncheckedUpdateWithoutAccessLevelInput>
  }

  export type MenuAccessLevelUpdateManyWithWhereWithoutAccessLevelInput = {
    where: MenuAccessLevelScalarWhereInput
    data: XOR<MenuAccessLevelUpdateManyMutationInput, MenuAccessLevelUncheckedUpdateManyWithoutAccessLevelInput>
  }

  export type MenuGroupAccessUpsertWithWhereUniqueWithoutAccessLevelInput = {
    where: MenuGroupAccessWhereUniqueInput
    update: XOR<MenuGroupAccessUpdateWithoutAccessLevelInput, MenuGroupAccessUncheckedUpdateWithoutAccessLevelInput>
    create: XOR<MenuGroupAccessCreateWithoutAccessLevelInput, MenuGroupAccessUncheckedCreateWithoutAccessLevelInput>
  }

  export type MenuGroupAccessUpdateWithWhereUniqueWithoutAccessLevelInput = {
    where: MenuGroupAccessWhereUniqueInput
    data: XOR<MenuGroupAccessUpdateWithoutAccessLevelInput, MenuGroupAccessUncheckedUpdateWithoutAccessLevelInput>
  }

  export type MenuGroupAccessUpdateManyWithWhereWithoutAccessLevelInput = {
    where: MenuGroupAccessScalarWhereInput
    data: XOR<MenuGroupAccessUpdateManyMutationInput, MenuGroupAccessUncheckedUpdateManyWithoutAccessLevelInput>
  }

  export type MenuCreateWithoutAclsInput = {
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    parent?: MenuCreateNestedOneWithoutChildrenInput
    children?: MenuCreateNestedManyWithoutParentInput
    groups?: MenuGroupCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutAclsInput = {
    id?: number
    parentId?: number | null
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    groups?: MenuGroupUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutAclsInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutAclsInput, MenuUncheckedCreateWithoutAclsInput>
  }

  export type AccessLevelCreateWithoutMenusInput = {
    code: string
    description?: string | null
    groupAccess?: MenuGroupAccessCreateNestedManyWithoutAccessLevelInput
  }

  export type AccessLevelUncheckedCreateWithoutMenusInput = {
    id?: number
    code: string
    description?: string | null
    groupAccess?: MenuGroupAccessUncheckedCreateNestedManyWithoutAccessLevelInput
  }

  export type AccessLevelCreateOrConnectWithoutMenusInput = {
    where: AccessLevelWhereUniqueInput
    create: XOR<AccessLevelCreateWithoutMenusInput, AccessLevelUncheckedCreateWithoutMenusInput>
  }

  export type MenuUpsertWithoutAclsInput = {
    update: XOR<MenuUpdateWithoutAclsInput, MenuUncheckedUpdateWithoutAclsInput>
    create: XOR<MenuCreateWithoutAclsInput, MenuUncheckedCreateWithoutAclsInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutAclsInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutAclsInput, MenuUncheckedUpdateWithoutAclsInput>
  }

  export type MenuUpdateWithoutAclsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
    groups?: MenuGroupUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutAclsInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    groups?: MenuGroupUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type AccessLevelUpsertWithoutMenusInput = {
    update: XOR<AccessLevelUpdateWithoutMenusInput, AccessLevelUncheckedUpdateWithoutMenusInput>
    create: XOR<AccessLevelCreateWithoutMenusInput, AccessLevelUncheckedCreateWithoutMenusInput>
    where?: AccessLevelWhereInput
  }

  export type AccessLevelUpdateToOneWithWhereWithoutMenusInput = {
    where?: AccessLevelWhereInput
    data: XOR<AccessLevelUpdateWithoutMenusInput, AccessLevelUncheckedUpdateWithoutMenusInput>
  }

  export type AccessLevelUpdateWithoutMenusInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupAccess?: MenuGroupAccessUpdateManyWithoutAccessLevelNestedInput
  }

  export type AccessLevelUncheckedUpdateWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupAccess?: MenuGroupAccessUncheckedUpdateManyWithoutAccessLevelNestedInput
  }

  export type MenuGroupCreateWithoutAccessInput = {
    isActive?: boolean
    orderNumber?: number
    group: GroupCreateNestedOneWithoutMenusInput
    menu: MenuCreateNestedOneWithoutGroupsInput
  }

  export type MenuGroupUncheckedCreateWithoutAccessInput = {
    id?: number
    groupId: number
    menuId: number
    isActive?: boolean
    orderNumber?: number
  }

  export type MenuGroupCreateOrConnectWithoutAccessInput = {
    where: MenuGroupWhereUniqueInput
    create: XOR<MenuGroupCreateWithoutAccessInput, MenuGroupUncheckedCreateWithoutAccessInput>
  }

  export type AccessLevelCreateWithoutGroupAccessInput = {
    code: string
    description?: string | null
    menus?: MenuAccessLevelCreateNestedManyWithoutAccessLevelInput
  }

  export type AccessLevelUncheckedCreateWithoutGroupAccessInput = {
    id?: number
    code: string
    description?: string | null
    menus?: MenuAccessLevelUncheckedCreateNestedManyWithoutAccessLevelInput
  }

  export type AccessLevelCreateOrConnectWithoutGroupAccessInput = {
    where: AccessLevelWhereUniqueInput
    create: XOR<AccessLevelCreateWithoutGroupAccessInput, AccessLevelUncheckedCreateWithoutGroupAccessInput>
  }

  export type MenuGroupUpsertWithoutAccessInput = {
    update: XOR<MenuGroupUpdateWithoutAccessInput, MenuGroupUncheckedUpdateWithoutAccessInput>
    create: XOR<MenuGroupCreateWithoutAccessInput, MenuGroupUncheckedCreateWithoutAccessInput>
    where?: MenuGroupWhereInput
  }

  export type MenuGroupUpdateToOneWithWhereWithoutAccessInput = {
    where?: MenuGroupWhereInput
    data: XOR<MenuGroupUpdateWithoutAccessInput, MenuGroupUncheckedUpdateWithoutAccessInput>
  }

  export type MenuGroupUpdateWithoutAccessInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
    group?: GroupUpdateOneRequiredWithoutMenusNestedInput
    menu?: MenuUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type MenuGroupUncheckedUpdateWithoutAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
  }

  export type AccessLevelUpsertWithoutGroupAccessInput = {
    update: XOR<AccessLevelUpdateWithoutGroupAccessInput, AccessLevelUncheckedUpdateWithoutGroupAccessInput>
    create: XOR<AccessLevelCreateWithoutGroupAccessInput, AccessLevelUncheckedCreateWithoutGroupAccessInput>
    where?: AccessLevelWhereInput
  }

  export type AccessLevelUpdateToOneWithWhereWithoutGroupAccessInput = {
    where?: AccessLevelWhereInput
    data: XOR<AccessLevelUpdateWithoutGroupAccessInput, AccessLevelUncheckedUpdateWithoutGroupAccessInput>
  }

  export type AccessLevelUpdateWithoutGroupAccessInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    menus?: MenuAccessLevelUpdateManyWithoutAccessLevelNestedInput
  }

  export type AccessLevelUncheckedUpdateWithoutGroupAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    menus?: MenuAccessLevelUncheckedUpdateManyWithoutAccessLevelNestedInput
  }

  export type UserCreateManyGroupInput = {
    id?: number
    uuid?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MenuGroupCreateManyGroupInput = {
    id?: number
    menuId: number
    isActive?: boolean
    orderNumber?: number
  }

  export type UserUpdateWithoutGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuGroupUpdateWithoutGroupInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
    menu?: MenuUpdateOneRequiredWithoutGroupsNestedInput
    access?: MenuGroupAccessUpdateManyWithoutMenuGroupNestedInput
  }

  export type MenuGroupUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
    access?: MenuGroupAccessUncheckedUpdateManyWithoutMenuGroupNestedInput
  }

  export type MenuGroupUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
  }

  export type MenuGroupAccessCreateManyMenuGroupInput = {
    id?: number
    accessLevelId: number
  }

  export type MenuGroupAccessUpdateWithoutMenuGroupInput = {
    accessLevel?: AccessLevelUpdateOneRequiredWithoutGroupAccessNestedInput
  }

  export type MenuGroupAccessUncheckedUpdateWithoutMenuGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuGroupAccessUncheckedUpdateManyWithoutMenuGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuCreateManyParentInput = {
    id?: number
    description?: string | null
    name: string
    label: string
    icon?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type MenuAccessLevelCreateManyMenuInput = {
    id?: number
    accessLevelId: number
  }

  export type MenuGroupCreateManyMenuInput = {
    id?: number
    groupId: number
    isActive?: boolean
    orderNumber?: number
  }

  export type MenuUpdateWithoutParentInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    children?: MenuUpdateManyWithoutParentNestedInput
    acls?: MenuAccessLevelUpdateManyWithoutMenuNestedInput
    groups?: MenuGroupUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    acls?: MenuAccessLevelUncheckedUpdateManyWithoutMenuNestedInput
    groups?: MenuGroupUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenuAccessLevelUpdateWithoutMenuInput = {
    accessLevel?: AccessLevelUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuAccessLevelUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuAccessLevelUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessLevelId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuGroupUpdateWithoutMenuInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
    group?: GroupUpdateOneRequiredWithoutMenusNestedInput
    access?: MenuGroupAccessUpdateManyWithoutMenuGroupNestedInput
  }

  export type MenuGroupUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
    access?: MenuGroupAccessUncheckedUpdateManyWithoutMenuGroupNestedInput
  }

  export type MenuGroupUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    orderNumber?: IntFieldUpdateOperationsInput | number
  }

  export type MenuAccessLevelCreateManyAccessLevelInput = {
    id?: number
    menuId: number
  }

  export type MenuGroupAccessCreateManyAccessLevelInput = {
    id?: number
    menuGroupId: number
  }

  export type MenuAccessLevelUpdateWithoutAccessLevelInput = {
    menu?: MenuUpdateOneRequiredWithoutAclsNestedInput
  }

  export type MenuAccessLevelUncheckedUpdateWithoutAccessLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuAccessLevelUncheckedUpdateManyWithoutAccessLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuGroupAccessUpdateWithoutAccessLevelInput = {
    menuGroup?: MenuGroupUpdateOneRequiredWithoutAccessNestedInput
  }

  export type MenuGroupAccessUncheckedUpdateWithoutAccessLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuGroupAccessUncheckedUpdateManyWithoutAccessLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuGroupId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
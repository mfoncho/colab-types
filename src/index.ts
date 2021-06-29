export interface IColor {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
}

export interface IPalette {
    red: IColor;
    blue: IColor;
    grey: IColor;
    pink: IColor;
    teal: IColor;
    brown: IColor;
    green: IColor;
    amber: IColor;
    yellow: IColor;
    orange: IColor;
    purple: IColor;
    indigo: IColor;
    bluegrey: IColor;
    deeppurple: IColor;
    deeporange: IColor;
}

declare global {
    interface Window {
        [key: string]: any;
    }
}

export type Diff<T, U> = T extends U ? never : T;

export type Require<T, K extends keyof T> = T &
    Required<{ [P in K]: Diff<T[P], undefined> }>;

export type Optional<T, K extends keyof T> = {
    [P in K]?: Diff<T[P], undefined>;
} &
    Omit<T, K>;

export interface Thenable<T = any> {
    then<S, E>(
        onFullfill: (data: T) => S,
        onReject?: (reason: any) => E
    ): Promise<S | E>;
}

export type PartialTurtle<T> = {
    [P in keyof T]?:
      T[P] extends (infer U)[] ? PartialTurtle<U>[] :
      T[P] extends object ? PartialTurtle<T[P]> :
      T[P];
}


export interface Finalizable<T = any> {
    finally<F = never>(onFullfill: () => F): Promise<T | F>;
}

export interface Catchable<T = any> {
    catch<F = never>(onError: () => F): Promise<T | F>;
}

export interface Promiseable<T = any, E = any>
    extends Thenable<T>,
        Finalizable<T>,
        Catchable<E> {}

export interface RouterParams {
    channel_id?: string;
    workspace_id?: string;
}

export interface RouteLocation {
    state: any;
    search: string;
    pathname: string;
    hash: string;
    key?: string;
}

export interface Route extends RouteLocation {
    params: RouterParams;
}

export interface Page<T> {
    data: T[];
    page_size: number;
    page_number: number;
    total_count: number;
    total_pages: number;
}

export type ColumnType = "stack" | "queue";

export type ThreadType = "topic" | "reply" | "card" | "email" | "comment";

export type  Access = "public" | "private" | "direct";

export type SpaceType = "board" | "discuss";

export type Id = string;

export interface Unique {
    id: Id;
}

export interface Timestamp extends String {}

export interface Timestamped {
    timestamp: Timestamp;
}

export interface Positioned {
    position: number;
}

export interface BelongsToUser {
    user_id: Id;
}

export interface BelongsToCard {
    card_id: Id;
}

export interface BelongsToThread {
    thread_id: Id;
}

export interface BelongsToSpace {
    space_id: Id;
}

export interface BelongsToBoard{
    board_id: Id
}

export interface BelongsToWorkspace {
    workspace_id: Id;
}

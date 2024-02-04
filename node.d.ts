declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        destructor(): void;
        static destructor(): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: (number | $mol_wire_sub)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_frame | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): void;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): void;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
        step(): Promise<null>;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    class $mol_term_color {
        static reset: (str: string) => string;
        static bold: (str: string) => string;
        static italic: (str: string) => string;
        static underline: (str: string) => string;
        static inverse: (str: string) => string;
        static hidden: (str: string) => string;
        static strike: (str: string) => string;
        static gray: (str: string) => string;
        static red: (str: string) => string;
        static green: (str: string) => string;
        static yellow: (str: string) => string;
        static blue: (str: string) => string;
        static magenta: (str: string) => string;
        static cyan: (str: string) => string;
        static Gray: (str: string) => string;
        static Red: (str: string) => string;
        static Green: (str: string) => string;
        static Yellow: (str: string) => string;
        static Blue: (str: string) => string;
        static Magenta: (str: string) => string;
        static Cyan: (str: string) => string;
        static ansi(open: number, close: number): (str: string) => string;
    }
}

declare namespace $ {
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: (str: string) => string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    enum $mol_rest_code {
        Continue = 100,
        Switching_Protocols = 101,
        Processing = 102,
        OK = 200,
        Created = 201,
        Accepted = 202,
        Non_Authoritative_Information = 203,
        No_Content = 204,
        Reset_Content = 205,
        Partial_Content = 206,
        Multi_Status = 207,
        Already_Reported = 208,
        IM_Used = 226,
        Multiple_Choices = 300,
        Moved_Permanently = 301,
        Found = 302,
        See_Other = 303,
        Not_Modified = 304,
        Use_Proxy = 305,
        Temporary_Redirect = 307,
        Bad_Request = 400,
        Unauthorized = 401,
        Payment_Required = 402,
        Forbidden = 403,
        Not_Found = 404,
        Method_Not_Allowed = 405,
        Not_Acceptable = 406,
        Proxy_Authentication_Required = 407,
        Request_Timeout = 408,
        Conflict = 409,
        Gone = 410,
        Length_Required = 411,
        Precondition_Failed = 412,
        Request_Entity_Too_Large = 413,
        Request_URI_Too_Long = 414,
        Unsupported_Media_Type = 415,
        Requested_Range_Not_Satisfiable = 416,
        Expectation_Failed = 417,
        Teapot = 418,
        Unprocessable_Entity = 422,
        Locked = 423,
        Failed_Dependency = 424,
        Upgrade_Required = 426,
        Precondition_Required = 428,
        Too_Many_Requests = 429,
        Request_Header_Fields_Too_Large = 431,
        Unavailable_For_Legal_Reasons = 451,
        Internal_Server_Error = 500,
        Not_Implemented = 501,
        Bad_Gateway = 502,
        Service_Unavailable = 503,
        Gateway_Timeout = 504,
        HTTP_Version_Not_Supported = 505,
        Insufficient_Storage = 507,
        Loop_Detected = 508,
        Not_Extended = 510,
        Network_Authentication_Required = 511,
        Network_Read_Timeout_Error = 598,
        Network_Connect_Timeout_Error = 599
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    function $mol_dom_serialize(node: Node): string;
}

declare namespace $ {
    type $mol_rest_port_mime_hi = 'text' | 'application' | 'font' | 'audio' | 'video' | 'image' | 'model';
    type $mol_rest_port_mime = `${$mol_rest_port_mime_hi}/${string}`;
    class $mol_rest_port extends $mol_object {
        send_code(code: $mol_rest_code): void;
        send_type(mime: $mol_rest_port_mime): void;
        send_data(data: null | string | Uint8Array | Element | object): void;
        send_nil(): void;
        send_bin(data: Uint8Array): void;
        send_text(data: string): void;
        send_json(data: object): void;
        send_dom(data: Element): void;
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    class $mol_rest_port_http extends $mol_rest_port {
        output: InstanceType<$node['http']['ServerResponse']>;
        send_code(code: $mol_rest_code): void;
        send_type(mime: $mol_rest_port_mime): void;
        send_bin(data: Uint8Array): void;
    }
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    class $mol_rest_message extends $mol_object {
        port: $mol_rest_port;
        method(): string;
        uri(): URL;
        type(): `image/${string}` | `text/${string}` | `audio/${string}` | `video/${string}` | `font/${string}` | `application/${string}` | `model/${string}`;
        data(): null | string | Uint8Array | Element | object;
        bin(): Uint8Array;
        text(): string;
        reply(data: null | string | Uint8Array | Element | object, meta?: {
            type?: $mol_rest_port_mime;
            code?: $mol_rest_code;
        }): void;
        route(uri: URL): $mol_rest_message;
        derive(method: string, data: null | string | Uint8Array | Element | object): $mol_rest_message;
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_rest_message_http extends $mol_rest_message {
        input: InstanceType<$node['http']['IncomingMessage']>;
        method(): string;
        uri(): URL;
        type(): `image/${string}` | `text/${string}` | `audio/${string}` | `video/${string}` | `font/${string}` | `application/${string}` | `model/${string}`;
        data(): null | string | Uint8Array | Element | object;
        route(uri: URL): $mol_rest_message_http;
    }
}

declare namespace $ {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
}

declare namespace $ {
    function $mol_base64_encode(src: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_encode_node(str: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_decode_node(base64Str: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_ae_encode(buffer: Uint8Array): string;
    function $mol_base64_ae_decode(str: string): Uint8Array;
}

declare namespace $ {
    class $mol_buffer extends DataView {
        static from<This extends typeof $mol_buffer>(this: This, array: number | string | ArrayBufferView): InstanceType<This>;
        static toString(): string;
        getUint48(offset: number, LE?: boolean): number;
        setUint48(offset: number, value: number, LE?: boolean): void;
        int8(offset: number, next?: number): number;
        uint8(offset: number, next?: number): number;
        int16(offset: number, next?: number): number;
        uint16(offset: number, next?: number): number;
        int32(offset: number, next?: number): number;
        uint32(offset: number, next?: number): number;
        uint48(offset: number, next?: number): number;
        int64(offset: number, next?: bigint): bigint;
        uint64(offset: number, next?: bigint): bigint;
        float32(offset: number, next?: number): number;
        float64(offset: number, next?: number): number;
        asArray(): Uint8Array;
        toString(): string;
    }
}

declare namespace $ {
    enum $mol_websocket_frame_op {
        con = 0,
        txt = 1,
        bin = 2,
        stop = 8,
        ping = 9,
        pong = 10
    }
    class $mol_websocket_frame extends $mol_buffer {
        kind(next?: {
            op: keyof typeof $mol_websocket_frame_op;
            fin: boolean;
        }): {
            op: keyof typeof $mol_websocket_frame_op;
            fin: boolean;
        } | {
            op: "stop" | "bin" | "con" | "txt" | "ping" | "pong";
            fin: number;
        };
        data(next?: {
            size: number;
            mask: boolean;
        }): {
            size: number;
            mask: boolean;
        } | {
            size: number;
            mask: number;
        };
        size(): number;
        mask(): Uint8Array;
        toString(): string;
        static make(op: keyof typeof $mol_websocket_frame_op, size?: number, mask?: boolean, fin?: boolean): $mol_websocket_frame;
    }
}

declare namespace $ {
    class $mol_rest_port_ws_node extends $mol_rest_port_ws {
        socket: InstanceType<$node['stream']['Duplex']>;
        send_nil(): void;
        send_bin(data: Uint8Array): void;
        send_text(data: string): void;
    }
}

declare namespace $ {
    function $mol_crypto_hash(data: Uint8Array): Uint8Array;
}

declare namespace $ {
    class $mol_rest_port_webrtc extends $mol_rest_port {
        channel: InstanceType<typeof import('node-datachannel/polyfill').RTCDataChannel>;
        send_bin(data: Uint8Array): void;
        send_text(data: string): void;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static prolog: string;
        static separator: string;
        static href(next?: string): string;
        static href_normal(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static make_link(next: Record<string, string | null>): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {
    class $mol_rest_resource extends $mol_object {
        REQUEST(msg: $mol_rest_message): any;
        OPTIONS(msg: $mol_rest_message): Promise<void>;
        OPEN(msg: $mol_rest_message): void;
        CLOSE(msg: $mol_rest_message): void;
        HEAD(msg: $mol_rest_message): void;
        GET(msg: $mol_rest_message): void;
        PUT(msg: $mol_rest_message): void;
        PATCH(msg: $mol_rest_message): void;
        POST(msg: $mol_rest_message): void;
        DELETE(msg: $mol_rest_message): void;
        static port(port: number): $mol_rest_server;
        static serve(): $mol_rest_server | undefined;
    }
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

/// <reference types="node" />
/// <reference types="node" />
declare namespace $ {
    function $mol_exec(this: $, dir: string, command: string, ...args: string[]): import("child_process").SpawnSyncReturns<Buffer>;
}

/// <reference types="node" />
/// <reference types="node" />
declare namespace $ {
    class $mol_rest_server extends $mol_object {
        port(): number;
        start(): void;
        http_server(): import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
        http_income(req: InstanceType<$node['http']['IncomingMessage']>, res: InstanceType<$node['http']['ServerResponse']>): void;
        ws_upgrade(req: InstanceType<$node['http']['IncomingMessage']>, socket: InstanceType<$node['stream']['Duplex']>, head: Buffer): void;
        ws_income(chunk: Buffer, upgrade: $mol_rest_message, sock: InstanceType<typeof $node.stream.Duplex>): void;
        root(resource?: $mol_rest_resource): $mol_rest_resource;
        static start<Resource extends typeof $mol_rest_resource>(Resource: Resource): Resource;
    }
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    type $mol_type_partial_deep<Val> = Val extends object ? Val extends Function ? Val : {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]> | undefined;
    } : Val;
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: Set<string> | null;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        reset(): void;
        version(): string;
        abstract ensure(): void;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array): Uint8Array;
        text(next?: string, virt?: 'virt'): string;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
    }
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    class $mol_file_node extends $mol_file {
        static absolute(path: string): $mol_file_node;
        static relative(path: string): $mol_file_node;
        watcher(): {
            destructor(): void;
        };
        stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        ensure(): void;
        buffer(next?: Uint8Array): Uint8Array;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): undefined;
    }
}

declare namespace $ {
    let $mol_rest_resource_fs_extensions: Record<string, `image/${string}` | `text/${string}` | `audio/${string}` | `video/${string}` | `font/${string}` | `application/${string}` | `model/${string}`>;
}

declare namespace $ {
    class $mol_rest_resource_fs extends $mol_rest_resource {
        _root(): $mol_file;
        GET(msg: $mol_rest_message): void;
    }
}

declare namespace $ {
    class $mol_wire_dict<Key, Value> extends Map<Key, Value> {
        pub: $mol_wire_pub;
        has(key: Key): boolean;
        get(key: Key): Value | undefined;
        entries(): IterableIterator<[Key, Value]>;
        keys(): IterableIterator<Key>;
        values(): IterableIterator<Value>;
        forEach(task: (value: Value, key: Key, dict: Map<Key, Value>) => void, self?: any): void;
        [Symbol.iterator](): IterableIterator<[Key, Value]>;
        get size(): number;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        clear(): void;
        item(key: Key, next?: Value | null): NonNullable<Value> | null;
    }
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    type $mol_data_tagged_type<Value, Tag extends PropertyKey> = Value & {
        [Key in Tag]: Value;
    };
    type $mol_data_tagged_parser<Input, Output> = {
        Value: Output;
    } & ((val: $mol_data_tagged_type<Input, never>) => Output);
    export function $mol_data_tagged<Config extends Record<string, $mol_data_value>>(config: Config): { [Type in keyof Config]: $mol_data_tagged_parser<Parameters<Config[Type]>[0], $mol_data_tagged_type<ReturnType<Config[Type]>, Type>>; };
    export {};
}

declare namespace $ {
    const $hyoo_crus_ref: {
        Value: symbol & {
            $hyoo_crus_ref: symbol;
        };
    } & ((val: (string | symbol) & {}) => symbol & {
        $hyoo_crus_ref: symbol;
    });
    function $hyoo_crus_ref_home(ref: typeof $hyoo_crus_ref.Value): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_root(ref: typeof $hyoo_crus_ref.Value): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_lord(ref: typeof $hyoo_crus_ref.Value): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_land(ref: typeof $hyoo_crus_ref.Value): string;
    function $hyoo_crus_ref_head(ref: typeof $hyoo_crus_ref.Value): string;
    function $hyoo_crus_ref_encode(ref: typeof $hyoo_crus_ref.Value): Uint8Array;
    function $hyoo_crus_ref_decode(bin: Uint8Array): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_relate(base: typeof $hyoo_crus_ref.Value, ref: typeof $hyoo_crus_ref.Value): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_resolve(base: typeof $hyoo_crus_ref.Value, ref: typeof $hyoo_crus_ref.Value): symbol & {
        $hyoo_crus_ref: symbol;
    };
}

declare namespace $ {
    function $mol_base64_url_encode(buffer: Uint8Array): string;
    function $mol_base64_url_decode(str: string): Uint8Array;
}

declare namespace $ {
    var $mol_crypto_native: Crypto;
}

declare namespace $ {
    class $mol_crypto_key extends $mol_buffer {
        static from<This extends typeof $mol_crypto_key>(this: This, serial: number | string | ArrayBufferView): InstanceType<This>;
        asArray(): Uint8Array;
        toString(): string;
    }
    class $mol_crypto_key_public extends $mol_crypto_key {
        static size_str: number;
        static size_bin: number;
        native(): Promise<CryptoKey>;
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
    }
    class $mol_crypto_key_private extends $mol_crypto_key {
        static size_str: number;
        static size_bin: number;
        static size_sign: number;
        static generate(): Promise<$mol_crypto_key_private>;
        native(): Promise<CryptoKey>;
        public(): $mol_crypto_key_public;
        sign(data: BufferSource): Promise<ArrayBuffer>;
    }
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
    const $hyoo_crus_part_crus: Uint8Array;
    enum $hyoo_crus_part {
        land = 67,
        face = 239,
        pass = 255,
        gift = 247,
        gist = 0,
        hash = 253,
        rock = 245,
        buck = 1
    }
}

declare namespace $ {
    enum $hyoo_crus_unit_kind {
        pass = 255,
        gift = 247,
        gist = 0
    }
    class $hyoo_crus_unit extends $mol_buffer {
        static size: 128;
        constructor(buffer?: ArrayBuffer, byteOffset?: number, byteLength?: number);
        kind(): "gist" | "pass" | "gift";
        choose<Res>(ways: {
            pass: (unit: $hyoo_crus_pass) => Res;
            gift: (unit: $hyoo_crus_gift) => Res;
            gist: (unit: $hyoo_crus_gist) => Res;
        }): Res;
        narrow(): $hyoo_crus_unit;
        id6(offset: number, next?: string): string;
        id12(offset: number, next?: typeof $hyoo_crus_ref.Value): symbol & {
            $hyoo_crus_ref: symbol;
        };
        _peer: string;
        peer(next?: string): string;
        salt(): Uint8Array;
        sens(next?: ArrayLike<number>): Uint8Array;
        mix(mixin: Uint8Array): void;
        sign(next?: ArrayLike<number>): Uint8Array;
        signed(): boolean;
    }
}

declare namespace $ {
    class $mol_crypto_secret extends Object {
        readonly native: CryptoKey & {
            type: 'secret';
        };
        static size: number;
        constructor(native: CryptoKey & {
            type: 'secret';
        });
        static generate(): Promise<$mol_crypto_secret>;
        static from(serial: BufferSource | string): Promise<$mol_crypto_secret>;
        static derive(private_serial: string, public_serial: string): Promise<$mol_crypto_secret>;
        serial(): Promise<ArrayBuffer>;
        encrypt(open: BufferSource, salt: BufferSource): Promise<ArrayBuffer>;
        decrypt(closed: BufferSource, salt: BufferSource): Promise<ArrayBuffer>;
    }
}

declare namespace $ {
    class $hyoo_crus_pass extends $hyoo_crus_unit {
        work(): number;
        _lord: typeof $hyoo_crus_ref.Value;
        lord(next?: typeof $hyoo_crus_ref.Value): symbol & {
            $hyoo_crus_ref: symbol;
        };
        auth(next?: ArrayLike<number>): Uint8Array;
    }
}

declare namespace $ {
    enum $hyoo_crus_rang {
        nil = 0,
        get = 1,
        add = 3,
        mod = 7,
        law = 15
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config?: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    class $hyoo_crus_gift extends $hyoo_crus_unit {
        rang(next?: $hyoo_crus_rang): $hyoo_crus_rang;
        time(next?: number): number;
        free(): Uint8Array;
        _dest: typeof $hyoo_crus_ref.Value;
        dest(next?: typeof $hyoo_crus_ref.Value): symbol & {
            $hyoo_crus_ref: symbol;
        };
        bill(): Uint8Array;
        static compare(left: $hyoo_crus_gift, right: $hyoo_crus_gift): number;
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string;
    }
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type json = null | boolean | number | string | {
        [key in string]: json;
    } | readonly json[];
    export type $hyoo_crus_vary_type = Uint8Array | bigint | typeof $hyoo_crus_ref.Value | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | json | Node;
    export let $hyoo_crus_vary_mapping: {
        nil: null;
        bin: Uint8ArrayConstructor;
        bool: BooleanConstructor;
        int: BigIntConstructor;
        real: NumberConstructor;
        ref: SymbolConstructor;
        str: StringConstructor;
        time: typeof $mol_time_moment;
        dur: typeof $mol_time_duration;
        range: typeof $mol_time_interval;
        json: ObjectConstructor;
        jsan: ArrayConstructor;
        dom: {
            new (): Element;
            prototype: Element;
        };
        tree: typeof $mol_tree2;
    };
    export type $hyoo_crus_vary_classes = typeof $hyoo_crus_vary_mapping[keyof typeof $hyoo_crus_vary_mapping];
    export type $hyoo_crus_vary_pack = {
        tip: keyof typeof $hyoo_crus_vary_tip;
        bin: Uint8Array;
    };
    export enum $hyoo_crus_vary_tip {
        nil = 0,
        bin = 1,
        bool = 2,
        int = 3,
        real = 4,
        ref = 5,
        str = 16,
        time = 17,
        dur = 18,
        range = 19,
        json = 20,
        jsan = 21,
        dom = 22,
        tree = 23
    }
    export function $hyoo_crus_vary_switch<Ways extends {
        nil: (vary: null) => any;
        bin: (vary: Uint8Array) => any;
        bool: (vary: boolean) => any;
        int: (vary: bigint) => any;
        real: (vary: number) => any;
        ref: (vary: typeof $hyoo_crus_ref.Value) => any;
        str: (vary: string) => any;
        time: (vary: $mol_time_moment) => any;
        dur: (vary: $mol_time_duration) => any;
        range: (vary: $mol_time_interval) => any;
        json: (vary: {}) => any;
        jsan: (vary: any[]) => any;
        dom: (vary: Element) => any;
        tree: (vary: $mol_tree2) => any;
    }>(vary: $hyoo_crus_vary_type, ways: Ways): $mol_type_result<Ways[keyof Ways]>;
    export function $hyoo_crus_vary_encode(vary: $hyoo_crus_vary_type): $hyoo_crus_vary_pack;
    export function $hyoo_crus_vary_decode({ tip, bin }: $hyoo_crus_vary_pack): $hyoo_crus_vary_type;
    export {};
}

declare namespace $ {
    enum $hyoo_crus_gist_tag {
        term = 0,
        solo = 1,
        vals = 2,
        keys = 3
    }
    class $hyoo_crus_gist extends $hyoo_crus_unit {
        _vary: $hyoo_crus_vary_type | undefined;
        _open: Uint8Array | undefined;
        hint(tip?: "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree", tag?: "keys" | "term" | "solo" | "vals"): void;
        tag(): "keys" | "term" | "solo" | "vals";
        tip(): "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree";
        utf(): boolean;
        nil(): boolean;
        size(next?: number): number;
        time(next?: number): number;
        _self: string;
        self(next?: string): string;
        _head: string;
        head(next?: string): string;
        _lead: string;
        lead(next?: string): string;
        hash(next?: Uint8Array, tip?: "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree", tag?: "keys" | "term" | "solo" | "vals"): Uint8Array;
        meta(): Uint8Array;
        data(next?: Uint8Array, tip?: "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree", tag?: "keys" | "term" | "solo" | "vals"): Uint8Array;
        idea(): number;
        static compare(left: $hyoo_crus_gist, right: $hyoo_crus_gist): number;
    }
}

declare namespace $ {
    class $hyoo_crus_auth extends $mol_crypto_key_private {
        static current(): $hyoo_crus_auth;
        static generate(): Promise<$hyoo_crus_auth>;
        lord(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        peer(): string;
        secret_mutual(pub: string): $mol_crypto_secret;
    }
}

declare namespace $ {
    type $hyoo_crus_face_data = Iterable<readonly [peer: string, face: $hyoo_crus_face]>;
    type $hyoo_crus_face = {
        stamp: number;
        milli: number;
        count: number;
    };
    class $hyoo_crus_face_map extends Map<string, $hyoo_crus_face> {
        last: number;
        count: number;
        constructor(entries?: $hyoo_crus_face_data);
        sync(right: $hyoo_crus_face_data): void;
        count_shift(peer: string, count: number): number;
        time_max(peer: string, time: number): number;
        time(peer: string): number;
        tick(): number;
    }
}

declare namespace $ {
    class $mol_wire_set<Value> extends Set<Value> {
        pub: $mol_wire_pub;
        has(value: Value): boolean;
        entries(): IterableIterator<[Value, Value]>;
        keys(): IterableIterator<Value>;
        values(): IterableIterator<Value>;
        forEach(task: (value: Value, value2: Value, set: Set<Value>) => void, self?: any): void;
        [Symbol.iterator](): IterableIterator<Value>;
        get size(): number;
        add(value: Value): this;
        delete(value: Value): boolean;
        clear(): void;
        item(val: Value, next?: boolean): boolean;
    }
}

declare namespace $ {
    enum $hyoo_crus_area {
        data = 0,
        meta = 1
    }
    function $hyoo_crus_area_of(numb: string): "data" | "meta";
    function $hyoo_crus_area_to(numb: string, area: keyof typeof $hyoo_crus_area): string;
}

declare namespace $ {
    class $hyoo_crus_node extends $mol_object {
        static tag: "keys" | "term" | "solo" | "vals";
        land(): $hyoo_crus_land;
        head(): string;
        lord(): $hyoo_crus_lord | null;
        realm(): $hyoo_crus_realm | null;
        lord_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node extends typeof $hyoo_crus_node>(Node: Node): InstanceType<Node>;
        nodes<Node extends typeof $hyoo_crus_node>(Node: Node | null): readonly InstanceType<Node>[];
        units(): $hyoo_crus_gist[];
        filled(): boolean;
        can_change(lord?: symbol & {
            $hyoo_crus_ref: symbol;
        }): boolean;
    }
}

declare namespace $ {
    function $mol_reconcile<Prev, Next>({ prev, from, to, next, equal, drop, insert, update, }: {
        prev: readonly Prev[];
        from: number;
        to: number;
        next: ArrayLike<Next>;
        equal: (next: Next, prev: Prev) => boolean;
        drop: (prev: Prev, lead: Prev | null) => Prev | null;
        insert: (next: Next, lead: Prev | null) => Prev;
        update?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    function $mol_tree2_bin_to_bytes(tree: $mol_tree2): Uint8Array;
    function $mol_tree2_bin_from_bytes(bytes: ArrayLike<number>, span?: $mol_span): $mol_tree2;
    function $mol_tree2_bin_from_string(str: string, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_xml_from_dom(dom: Node): $mol_tree2;
}

declare namespace $ {
    function $hyoo_crus_vary_cast_bin(vary: $hyoo_crus_vary_type): Uint8Array | null;
    function $hyoo_crus_vary_cast_bool(vary: $hyoo_crus_vary_type): boolean | null;
    function $hyoo_crus_vary_cast_int(vary: $hyoo_crus_vary_type): bigint | null;
    function $hyoo_crus_vary_cast_real(vary: $hyoo_crus_vary_type): number | null;
    function $hyoo_crus_vary_cast_ref(vary: $hyoo_crus_vary_type): (symbol & {
        $hyoo_crus_ref: symbol;
    }) | null;
    function $hyoo_crus_vary_cast_str(vary: $hyoo_crus_vary_type): string | null;
    function $hyoo_crus_vary_cast_time(vary: $hyoo_crus_vary_type): $mol_time_moment | null;
    function $hyoo_crus_vary_cast_dur(vary: $hyoo_crus_vary_type): $mol_time_duration | $mol_time_moment | null;
    function $hyoo_crus_vary_cast_range(vary: $hyoo_crus_vary_type): $mol_time_moment | $mol_time_interval | null;
    function $hyoo_crus_vary_cast_json(vary: $hyoo_crus_vary_type): any;
    function $hyoo_crus_vary_cast_jsan(vary: $hyoo_crus_vary_type): any[] | string[] | never[] | number[] | boolean[] | {}[] | null;
    function $hyoo_crus_vary_cast_dom(vary: $hyoo_crus_vary_type): Element | HTMLElement | $mol_jsx.JSX.Element | null;
    function $hyoo_crus_vary_cast_tree(vary: $hyoo_crus_vary_type): $mol_tree2 | null;
    const $hyoo_crus_vary_cast_funcs: {
        readonly nil: () => null;
        readonly bin: typeof $hyoo_crus_vary_cast_bin;
        readonly bool: typeof $hyoo_crus_vary_cast_bool;
        readonly int: typeof $hyoo_crus_vary_cast_int;
        readonly real: typeof $hyoo_crus_vary_cast_real;
        readonly ref: typeof $hyoo_crus_vary_cast_ref;
        readonly str: typeof $hyoo_crus_vary_cast_str;
        readonly time: typeof $hyoo_crus_vary_cast_time;
        readonly dur: typeof $hyoo_crus_vary_cast_dur;
        readonly range: typeof $hyoo_crus_vary_cast_range;
        readonly json: typeof $hyoo_crus_vary_cast_json;
        readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
        readonly dom: typeof $hyoo_crus_vary_cast_dom;
        readonly tree: typeof $hyoo_crus_vary_cast_tree;
    };
    function $hyoo_crus_vary_cast<Tip extends keyof typeof $hyoo_crus_vary_tip>(tip: Tip, vary: $hyoo_crus_vary_type): any;
}

declare namespace $ {
    type $mol_type_erase<Class extends {
        new (): any;
    }, Keys extends keyof InstanceType<Class>> = Omit<Class, 'prototype'> & {
        new (): Omit<InstanceType<Class>, Keys>;
    };
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    export class $hyoo_crus_list extends $hyoo_crus_node {
        static tag: "keys" | "term" | "solo" | "vals";
        value(next?: readonly $hyoo_crus_vary_type[], tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
        items(next?: readonly $hyoo_crus_vary_type[], tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: "keys" | "term" | "solo" | "vals"): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node extends typeof $hyoo_crus_node>(Node: Node, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node>;
        static of<Tip extends keyof typeof $hyoo_crus_vary_tip>(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
                nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value_1 extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_4>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        static ref<Value extends any>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_1>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_2 extends typeof $hyoo_crus_node>(Node: Node_2) => InstanceType<Node_2>;
                nodes: <Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null) => readonly InstanceType<Node_3>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
    }
    const $hyoo_crus_list_bin_base: {
        new (): {
            value(next?: readonly (Uint8Array | null)[] | undefined): readonly (Uint8Array | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "bin";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_bin extends $hyoo_crus_list_bin_base {
    }
    const $hyoo_crus_list_bool_base: {
        new (): {
            value(next?: readonly (boolean | null)[] | undefined): readonly (boolean | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "bool";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_bool extends $hyoo_crus_list_bool_base {
    }
    const $hyoo_crus_list_int_base: {
        new (): {
            value(next?: readonly (bigint | null)[] | undefined): readonly (bigint | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "int";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_int extends $hyoo_crus_list_int_base {
    }
    const $hyoo_crus_list_real_base: {
        new (): {
            value(next?: readonly (number | null)[] | undefined): readonly (number | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "real";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_real extends $hyoo_crus_list_real_base {
    }
    const $hyoo_crus_list_ref_base: {
        new (): {
            value(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "ref";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_ref extends $hyoo_crus_list_ref_base {
    }
    const $hyoo_crus_list_str_base: {
        new (): {
            value(next?: readonly (string | null)[] | undefined): readonly (string | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "str";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_str extends $hyoo_crus_list_str_base {
    }
    const $hyoo_crus_list_time_base: {
        new (): {
            value(next?: readonly ($mol_time_moment | null)[] | undefined): readonly ($mol_time_moment | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "time";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_time extends $hyoo_crus_list_time_base {
    }
    const $hyoo_crus_list_json_base: {
        new (): {
            value(next?: readonly any[] | undefined): readonly any[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "json";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_json extends $hyoo_crus_list_json_base {
    }
    const $hyoo_crus_list_jsan_base: {
        new (): {
            value(next?: readonly (any[] | string[] | never[] | number[] | boolean[] | {}[] | null)[] | undefined): readonly (any[] | string[] | never[] | number[] | boolean[] | {}[] | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "jsan";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_jsan extends $hyoo_crus_list_jsan_base {
    }
    const $hyoo_crus_list_xml_base: {
        new (): {
            value(next?: readonly (Element | HTMLElement | $mol_jsx.JSX.Element | null)[] | undefined): readonly (Element | HTMLElement | $mol_jsx.JSX.Element | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "dom";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_xml extends $hyoo_crus_list_xml_base {
    }
    const $hyoo_crus_list_tree_base: {
        new (): {
            value(next?: readonly ($mol_tree2 | null)[] | undefined): readonly ($mol_tree2 | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "tree";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[] | undefined): readonly ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>[];
                items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
                splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
                find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
                has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
                add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
                cut(vary: $hyoo_crus_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                node_make<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_4>;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_5 extends typeof $hyoo_crus_node>(Node: Node_5): InstanceType<Node_5>;
                nodes<Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null): readonly InstanceType<Node_6>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                    remote_make(): $mol_type_result<$mol_type_result<Value>>;
                    local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                    find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                    head: () => string;
                    toString: () => string;
                    has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                    cut: (vary: $hyoo_crus_vary_type) => void;
                    move: (from: number, to: number) => void;
                    wipe: (seat: number) => void;
                    node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                    nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                };
                Value: Value;
                toJSON(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                toString: typeof $mol_object2.toString & (() => string);
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_list.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_list.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_list(next?: $mol_type_result<$mol_type_result<Value>>[] | undefined): $mol_type_result<$mol_type_result<Value>>[];
                remote_make(): $mol_type_result<$mol_type_result<Value>>;
                local_make(idea?: number | undefined): $mol_type_result<$mol_type_result<Value>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_7 extends typeof $hyoo_crus_node>(Node: Node_7, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_7>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_8 extends typeof $hyoo_crus_node>(Node: Node_8) => InstanceType<Node_8>;
                nodes: <Node_9 extends typeof $hyoo_crus_node>(Node: Node_9 | null) => readonly InstanceType<Node_9>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            Value: Value;
            toJSON(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            toString: typeof $mol_object2.toString & (() => string);
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_list.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_tree extends $hyoo_crus_list_tree_base {
    }
    export {};
}

declare namespace $ {
    function $mol_wire_field<Host extends object, Field extends keyof Host, Value extends Host[Field]>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Value>): any;
}

declare namespace $ {
    const $hyoo_crus_dict_base: $mol_type_erase<typeof $hyoo_crus_list, "value">;
    export class $hyoo_crus_dict extends $hyoo_crus_dict_base {
        static tag: "keys" | "term" | "solo" | "vals";
        value(): this;
        keys(): readonly $hyoo_crus_vary_type[];
        dive<Node extends typeof $hyoo_crus_node>(key: $hyoo_crus_vary_type, Node: Node, auto?: any): InstanceType<Node> | null;
        static to<Value extends {
            tag: keyof typeof $hyoo_crus_gist_tag;
            new (): {
                value: any;
            };
        }>(Value: Value): {
            new (): {
                Value: Value;
                key(key: $hyoo_crus_vary_type): InstanceType<Value>;
                value(): any;
                keys(): readonly $hyoo_crus_vary_type[];
                dive<Node_1 extends typeof $hyoo_crus_node>(key: $hyoo_crus_vary_type, Node: Node_1, auto?: any): InstanceType<Node_1> | null;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                splice: (next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals") => void;
                find: (vary: $hyoo_crus_vary_type) => $hyoo_crus_gist | null;
                head: () => string;
                toString: () => string;
                has: (vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals") => boolean;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                add: (vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => void;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                items: (next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals") => readonly $hyoo_crus_vary_type[];
                cut: (vary: $hyoo_crus_vary_type) => void;
                move: (from: number, to: number) => void;
                wipe: (seat: number) => void;
                node_make: <Node_2 extends typeof $hyoo_crus_node>(Node: Node_2, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals") => InstanceType<Node_2>;
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_3 extends typeof $hyoo_crus_node>(Node: Node_3) => InstanceType<Node_3>;
                nodes: <Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null) => readonly InstanceType<Node_4>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
            };
            toString(): string;
            tag: "keys" | "term" | "solo" | "vals";
            to<Value extends {
                new (): {
                    value: any;
                };
                tag: keyof typeof $hyoo_crus_gist_tag;
            }>(Value: Value): any;
            with<This extends typeof $hyoo_crus_dict, Schema extends Record<string, {
                new (): {
                    value: any;
                };
                tag: "keys" | "term" | "solo" | "vals";
            }>>(this: This, schema: Schema): This & (new (...args: any[]) => InstanceType<This> & { [Key in keyof Schema]: InstanceType<Schema[Key]>; } & { readonly [Key_1 in keyof Schema as Uncapitalize<Extract<Key_1, string>>]: (next?: ReturnType<InstanceType<Schema[Key_1]>["value"]> | undefined) => ReturnType<InstanceType<Schema[Key_1]>["value"]> | null; });
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_list.ref;
            of: typeof $hyoo_crus_list.of;
        };
        static with<This extends typeof $hyoo_crus_dict, Schema extends Record<string, {
            tag: keyof typeof $hyoo_crus_gist_tag;
            new (): {
                value: any;
            };
        }>>(this: This, schema: Schema): This & (new (...args: any[]) => InstanceType<This> & { [Key in keyof Schema]: InstanceType<Schema[Key]>; } & { readonly [Key_1 in keyof Schema as Uncapitalize<Extract<Key_1, string>>]: (next?: ReturnType<InstanceType<Schema[Key_1]>["value"]> | undefined) => ReturnType<InstanceType<Schema[Key_1]>["value"]> | null; });
    }
    export {};
}

declare namespace $ {
    const $hyoo_crus_meta_base: typeof $hyoo_crus_dict & (new (...args: any[]) => $hyoo_crus_dict & {
        Inflow: {
            value(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items(next?: readonly $hyoo_crus_vary_type[] | undefined, tag?: "keys" | "term" | "solo" | "vals"): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: "keys" | "term" | "solo" | "vals"): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_gist | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean | undefined, tag?: "keys" | "term" | "solo" | "vals"): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2): InstanceType<Node_2>;
            nodes<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3 | null): readonly InstanceType<Node_3>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
    } & {
        readonly inflow: (next?: readonly ((symbol & {
            $hyoo_crus_ref: symbol;
        }) | null)[] | undefined) => readonly ((symbol & {
            $hyoo_crus_ref: symbol;
        }) | null)[] | null;
    });
    export class $hyoo_crus_meta extends $hyoo_crus_meta_base {
    }
    export {};
}

declare namespace $ {
    class $hyoo_crus_fund<Key, Node> extends $mol_object {
        readonly item_make: (head: Key) => Node;
        constructor(item_make: (head: Key) => Node);
        Item(head: Key): Node;
    }
}

declare namespace $ {
    function $mol_db_response<Result>(request: IDBRequest<Result>): Promise<Result>;
}

declare namespace $ {
    function $mol_db<Schema extends $mol_db_schema>(this: $, name: string, ...migrations: ((transaction: $mol_db_transaction<$mol_db_schema>) => void)[]): Promise<$mol_db_database<Schema>>;
}

declare namespace $ {
    class $mol_db_store<Schema extends $mol_db_store_schema> {
        readonly native: IDBObjectStore;
        constructor(native: IDBObjectStore);
        get name(): string;
        get path(): string | string[];
        get incremental(): boolean;
        get indexes(): { [Name in keyof Schema["Indexes"]]: $mol_db_index<{
            Key: Schema["Indexes"][Name];
            Doc: Schema['Doc'];
        }>; };
        index_make(name: string, path?: string[], unique?: boolean, multiEntry?: boolean): IDBIndex;
        index_drop(name: string): this;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        clear(): Promise<undefined>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        put(doc: Schema['Doc'], key?: Schema['Key']): Promise<IDBValidKey>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
        drop(keys: Schema['Key'] | IDBKeyRange): Promise<undefined>;
    }
}

declare namespace $ {
    type $mol_db_store_schema = {
        Key: IDBValidKey;
        Doc: unknown;
        Indexes: Record<string, IDBValidKey[]>;
    };
}

declare namespace $ {
    class $mol_db_index<Schema extends $mol_db_index_schema> {
        readonly native: IDBIndex;
        constructor(native: IDBIndex);
        get name(): string;
        get paths(): string[];
        get unique(): boolean;
        get multiple(): boolean;
        get store(): $mol_db_store<$mol_db_store_schema>;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
    }
}

declare namespace $ {
    type $mol_db_index_schema = {
        Key: IDBValidKey[];
        Doc: unknown;
    };
}

declare namespace $ {
}

declare namespace $ {
    type $mol_db_schema = Record<string, $mol_db_store_schema>;
}

declare namespace $ {
    class $mol_db_database<Schema extends $mol_db_schema> {
        readonly native: IDBDatabase;
        constructor(native: IDBDatabase);
        get name(): string;
        get version(): number;
        get stores(): (keyof Schema)[];
        read<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): Pick<Schema, Names> extends infer T extends $mol_db_schema ? { [Name in keyof T]: $mol_db_store<Pick<Schema, Names>[Name]>; } : never;
        change<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): $mol_db_transaction<Pick<Schema, Names>>;
        kill(): Promise<IDBDatabase>;
        destructor(): void;
    }
}

interface IDBTransaction {
    commit(): void;
}
declare namespace $ {
    class $mol_db_transaction<Schema extends $mol_db_schema> {
        readonly native: IDBTransaction;
        constructor(native: IDBTransaction);
        get stores(): { [Name in keyof Schema]: $mol_db_store<Schema[Name]>; };
        store_make(name: string): IDBObjectStore;
        store_drop(name: string): this;
        abort(): void;
        commit(): Promise<void>;
        get db(): $mol_db_database<$mol_db_schema>;
    }
}

declare namespace $ {
    class $hyoo_crus_mine extends $mol_object {
        static hash(blob: Uint8Array): Uint8Array;
        static rock(hash: Uint8Array, next?: Uint8Array): Uint8Array | undefined;
        static save(blob: Uint8Array): Uint8Array;
        static read(): $mol_db_store<{
            Key: [Uint8Array];
            Doc: ArrayBuffer;
            Indexes: {};
        }>;
        static change(): Promise<$mol_db_store<{
            Key: [Uint8Array];
            Doc: ArrayBuffer;
            Indexes: {};
        }>>;
        static db(): Promise<$mol_db_database<{
            Rock: {
                Key: [Uint8Array];
                Doc: ArrayBuffer;
                Indexes: {};
            };
        }>>;
    }
}

declare namespace $ {
    class $hyoo_crus_pack extends $mol_buffer {
        toBlob(): Blob;
        parts(): {
            faces: Record<symbol & {
                $hyoo_crus_ref: symbol;
            }, $hyoo_crus_face_map>;
            units: Record<symbol & {
                $hyoo_crus_ref: symbol;
            }, $hyoo_crus_unit[]>;
            rocks: [Uint8Array, Uint8Array | null][];
        };
        static make(faces: Record<typeof $hyoo_crus_ref.Value, $hyoo_crus_face_map>, units: Record<typeof $hyoo_crus_ref.Value, readonly $hyoo_crus_unit[]>, rocks: readonly [Uint8Array, null | Uint8Array][]): $hyoo_crus_pack;
    }
}

declare namespace $ {
    class $mol_bus<Data> extends $mol_object {
        readonly name: string;
        readonly handle: (data: Data) => void;
        readonly channel: BroadcastChannel;
        constructor(name: string, handle: (data: Data) => void);
        destructor(): void;
        send(data: Data): void;
    }
}

declare namespace $ {
    function $mol_promise<Result = void>(): Promise<Result> & {
        done: (res: Result | PromiseLike<Result>) => void;
        fail: (error?: any) => void;
    };
}

declare namespace $ {
    function $mol_wait_timeout_async(this: $, timeout: number): Promise<void> & {
        done: (res: void | PromiseLike<void>) => void;
        fail: (error?: any) => void;
    } & {
        destructor: () => void;
    };
    function $mol_wait_timeout(this: $, timeout: number): void;
}

declare namespace $ {
    function $mol_wire_race<Tasks extends ((...args: any) => any)[]>(...tasks: Tasks): {
        [index in keyof Tasks]: ReturnType<Tasks[index]>;
    };
}

declare namespace $ {
    export class $hyoo_crus_reg extends $hyoo_crus_node {
        static tag: "keys" | "term" | "solo" | "vals";
        pick_unit(): $hyoo_crus_gist | undefined;
        value(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        value_vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        value_bool(next?: boolean): boolean | null;
        value_int(next?: bigint): bigint | null;
        value_real(next?: number): number | null;
        value_str(next?: string): string | null;
        value_bin(next?: Uint8Array | null): Uint8Array | null;
        value_ref(next?: typeof $hyoo_crus_ref.Value): typeof $hyoo_crus_ref.Value | null;
        value_as<Decode extends $mol_data_value>(decode: Decode, next?: ReturnType<Decode>): any;
        yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
        static of<Tip extends keyof typeof $hyoo_crus_vary_tip>(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value_1 extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_3 extends typeof $hyoo_crus_node>(Node: Node_3) => InstanceType<Node_3>;
                    nodes: <Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null) => readonly InstanceType<Node_4>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        static ref<Value extends any>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_1 extends typeof $hyoo_crus_node>(Node: Node_1) => InstanceType<Node_1>;
                nodes: <Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null) => readonly InstanceType<Node_2>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
    }
    const $hyoo_crus_reg_bin_base: {
        new (): {
            value(next?: Uint8Array | null | undefined): Uint8Array | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "bin";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_bin extends $hyoo_crus_reg_bin_base {
    }
    const $hyoo_crus_reg_bool_base: {
        new (): {
            value(next?: boolean | null | undefined): boolean | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "bool";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_bool extends $hyoo_crus_reg_bool_base {
    }
    const $hyoo_crus_reg_int_base: {
        new (): {
            value(next?: bigint | null | undefined): bigint | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "int";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_int extends $hyoo_crus_reg_int_base {
    }
    const $hyoo_crus_reg_real_base: {
        new (): {
            value(next?: number | null | undefined): number | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "real";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_real extends $hyoo_crus_reg_real_base {
    }
    const $hyoo_crus_reg_ref_base: {
        new (): {
            value(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "ref";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_ref extends $hyoo_crus_reg_ref_base {
    }
    const $hyoo_crus_reg_str_base: {
        new (): {
            value(next?: string | null | undefined): string | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "str";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_str extends $hyoo_crus_reg_str_base {
    }
    const $hyoo_crus_reg_time_base: {
        new (): {
            value(next?: $mol_time_moment | null | undefined): $mol_time_moment | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "time";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_time extends $hyoo_crus_reg_time_base {
    }
    const $hyoo_crus_reg_json_base: {
        new (): {
            value(next?: any): any;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "json";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_json extends $hyoo_crus_reg_json_base {
    }
    const $hyoo_crus_reg_jsan_base: {
        new (): {
            value(next?: any[] | string[] | never[] | number[] | boolean[] | {}[] | null | undefined): any[] | string[] | never[] | number[] | boolean[] | {}[] | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "jsan";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_jsan extends $hyoo_crus_reg_jsan_base {
    }
    const $hyoo_crus_reg_xml_base: {
        new (): {
            value(next?: Element | HTMLElement | $mol_jsx.JSX.Element | null | undefined): Element | HTMLElement | $mol_jsx.JSX.Element | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "dom";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_xml extends $hyoo_crus_reg_xml_base {
    }
    const $hyoo_crus_reg_tree_base: {
        new (): {
            value(next?: $mol_tree2 | null | undefined): $mol_tree2 | null;
            pick_unit(): $hyoo_crus_gist | undefined;
            value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
            value_bool(next?: boolean | undefined): boolean | null;
            value_int(next?: bigint | undefined): bigint | null;
            value_real(next?: number | undefined): number | null;
            value_str(next?: string | undefined): string | null;
            value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
            value_ref(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            value_as<Decode extends $mol_data_value<any, any>>(decode: Decode, next?: ReturnType<Decode> | undefined): any;
            yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
            land(): $hyoo_crus_land;
            head(): string;
            lord(): $hyoo_crus_lord | null;
            realm(): $hyoo_crus_realm | null;
            lord_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_2 extends typeof $hyoo_crus_node>(Node: Node_2 | null): readonly InstanceType<Node_2>[];
            units(): $hyoo_crus_gist[];
            filled(): boolean;
            can_change(lord?: symbol & {
                $hyoo_crus_ref: symbol;
            }): boolean;
            $: typeof $$;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: typeof $$;
        };
        tip: "tree";
        tag: "keys" | "term" | "solo" | "vals";
        of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): {
            new (): {
                value(next?: ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]> | undefined): ReturnType<{
                    readonly nil: () => null;
                    readonly bin: typeof $hyoo_crus_vary_cast_bin;
                    readonly bool: typeof $hyoo_crus_vary_cast_bool;
                    readonly int: typeof $hyoo_crus_vary_cast_int;
                    readonly real: typeof $hyoo_crus_vary_cast_real;
                    readonly ref: typeof $hyoo_crus_vary_cast_ref;
                    readonly str: typeof $hyoo_crus_vary_cast_str;
                    readonly time: typeof $hyoo_crus_vary_cast_time;
                    readonly dur: typeof $hyoo_crus_vary_cast_dur;
                    readonly range: typeof $hyoo_crus_vary_cast_range;
                    readonly json: typeof $hyoo_crus_vary_cast_json;
                    readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
                    readonly dom: typeof $hyoo_crus_vary_cast_dom;
                    readonly tree: typeof $hyoo_crus_vary_cast_tree;
                }[Tip]>;
                pick_unit(): $hyoo_crus_gist | undefined;
                value_vary(next?: $hyoo_crus_vary_type | undefined): $hyoo_crus_vary_type;
                value_bool(next?: boolean | undefined): boolean | null;
                value_int(next?: bigint | undefined): bigint | null;
                value_real(next?: number | undefined): number | null;
                value_str(next?: string | undefined): string | null;
                value_bin(next?: Uint8Array | null | undefined): Uint8Array | null;
                value_ref(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as<Decode_1 extends $mol_data_value<any, any>>(decode: Decode_1, next?: ReturnType<Decode_1> | undefined): any;
                yoke(vary: $hyoo_crus_vary_type, auto?: any): $hyoo_crus_land | null;
                land(): $hyoo_crus_land;
                head(): string;
                lord(): $hyoo_crus_lord | null;
                realm(): $hyoo_crus_realm | null;
                lord_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_3 extends typeof $hyoo_crus_node>(Node: Node_3): InstanceType<Node_3>;
                nodes<Node_4 extends typeof $hyoo_crus_node>(Node: Node_4 | null): readonly InstanceType<Node_4>[];
                units(): $hyoo_crus_gist[];
                filled(): boolean;
                can_change(lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }): boolean;
                $: typeof $$;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: typeof $$;
            };
            tip: Tip;
            tag: "keys" | "term" | "solo" | "vals";
            of<Tip extends "time" | "json" | "bin" | "nil" | "bool" | "int" | "real" | "ref" | "str" | "dur" | "range" | "jsan" | "dom" | "tree">(tip: Tip): any;
            ref<Value extends unknown>(Value: Value): {
                new (): {
                    value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                    remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                    [$mol_ambient_ref]: typeof $$;
                    [Symbol.toStringTag]: string;
                    head: () => string;
                    toString: () => string;
                    destructor: () => void;
                    $: typeof $$;
                    toJSON: () => string | undefined;
                    ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    land: () => $hyoo_crus_land;
                    lord: () => $hyoo_crus_lord | null;
                    realm: () => $hyoo_crus_realm | null;
                    lord_ref: () => symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                    nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                    units: () => $hyoo_crus_gist[];
                    filled: () => boolean;
                    can_change: (lord?: symbol & {
                        $hyoo_crus_ref: symbol;
                    }) => boolean;
                    pick_unit: () => $hyoo_crus_gist | undefined;
                    value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                    value_bool: (next?: boolean | undefined) => boolean | null;
                    value_int: (next?: bigint | undefined) => bigint | null;
                    value_real: (next?: number | undefined) => number | null;
                    value_str: (next?: string | undefined) => string | null;
                    value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                    value_ref: (next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | undefined) => (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                    yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
                };
                Value: Value;
                toString(): string;
                [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
                destructor: typeof $mol_object2.destructor;
                $: typeof $$;
                create: typeof $mol_object2.create;
                toJSON: typeof $mol_object2.toJSON;
                make: typeof $mol_object.make;
                ref: typeof $hyoo_crus_reg.ref;
                tag: "keys" | "term" | "solo" | "vals";
                of: typeof $hyoo_crus_reg.of;
            };
            make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
            $: typeof $$;
            create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
            toString(): any;
            toJSON(): any;
            destructor(): void;
            [Symbol.toPrimitive](): any;
        };
        ref<Value extends unknown>(Value: Value): {
            new (): {
                value(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
                remote_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                local_ensure(): NonNullable<$mol_type_result<$mol_type_result<Value>>>;
                [$mol_ambient_ref]: typeof $$;
                [Symbol.toStringTag]: string;
                head: () => string;
                toString: () => string;
                destructor: () => void;
                $: typeof $$;
                toJSON: () => string | undefined;
                ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                land: () => $hyoo_crus_land;
                lord: () => $hyoo_crus_lord | null;
                realm: () => $hyoo_crus_realm | null;
                lord_ref: () => symbol & {
                    $hyoo_crus_ref: symbol;
                };
                cast: <Node_5 extends typeof $hyoo_crus_node>(Node: Node_5) => InstanceType<Node_5>;
                nodes: <Node_6 extends typeof $hyoo_crus_node>(Node: Node_6 | null) => readonly InstanceType<Node_6>[];
                units: () => $hyoo_crus_gist[];
                filled: () => boolean;
                can_change: (lord?: symbol & {
                    $hyoo_crus_ref: symbol;
                }) => boolean;
                pick_unit: () => $hyoo_crus_gist | undefined;
                value_vary: (next?: $hyoo_crus_vary_type | undefined) => $hyoo_crus_vary_type;
                value_bool: (next?: boolean | undefined) => boolean | null;
                value_int: (next?: bigint | undefined) => bigint | null;
                value_real: (next?: number | undefined) => number | null;
                value_str: (next?: string | undefined) => string | null;
                value_bin: (next?: Uint8Array | null | undefined) => Uint8Array | null;
                value_ref: (next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | undefined) => (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                value_as: <Decode_2 extends $mol_data_value<any, any>>(decode: Decode_2, next?: ReturnType<Decode_2> | undefined) => any;
                yoke: (vary: $hyoo_crus_vary_type, auto?: any) => $hyoo_crus_land | null;
            };
            Value: Value;
            toString(): string;
            [Symbol.toPrimitive]: typeof $mol_object2.[ Symbol.toPrimitive ];
            destructor: typeof $mol_object2.destructor;
            $: typeof $$;
            create: typeof $mol_object2.create;
            toJSON: typeof $mol_object2.toJSON;
            make: typeof $mol_object.make;
            ref: typeof $hyoo_crus_reg.ref;
            tag: "keys" | "term" | "solo" | "vals";
            of: typeof $hyoo_crus_reg.of;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: typeof $$;
        create<Instance>(this: new (init?: ((instance: any) => void) | undefined) => Instance, init?: ((instance: $mol_type_writable<Instance>) => void) | undefined): Instance;
        toString(): any;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_reg_tree extends $hyoo_crus_reg_tree_base {
    }
    export {};
}

declare namespace $ {
    class $hyoo_crus_land extends $mol_object {
        lord(): $hyoo_crus_lord | null;
        numb(): string;
        lord_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        realm(): $hyoo_crus_realm | null;
        auth(): $hyoo_crus_auth;
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        face: $hyoo_crus_face_map;
        passes: $mol_wire_dict<string, $hyoo_crus_pass>;
        gifts: $mol_wire_dict<symbol & {
            $hyoo_crus_ref: symbol;
        }, $hyoo_crus_gift>;
        gists: $mol_wire_dict<string, $mol_wire_dict<string, $hyoo_crus_gist>>;
        self_all: $mol_wire_set<string>;
        self_make(area: keyof typeof $hyoo_crus_area, idea?: number): string;
        Data<Node extends typeof $hyoo_crus_node>(Node: Node): InstanceType<Node>;
        Meta(): $hyoo_crus_meta;
        Node<Node extends typeof $hyoo_crus_node>(Node: Node): $hyoo_crus_fund<string, InstanceType<Node>>;
        total(): number;
        joined_list(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        lord_rang(lord: typeof $hyoo_crus_ref.Value): $hyoo_crus_rang;
        peer_rang(peer: string): $hyoo_crus_rang;
        delta_unit(face?: $hyoo_crus_face_map): $hyoo_crus_unit[];
        delta_pack(face?: $hyoo_crus_face_map): $hyoo_crus_pack | null;
        faces_pack(): $hyoo_crus_pack;
        apply_unit(delta: readonly $hyoo_crus_unit[]): string[];
        units_verify(delta: readonly $hyoo_crus_unit[]): Promise<string[]>;
        apply_unit_trust(delta: readonly $hyoo_crus_unit[]): string[];
        apply_land(land: $hyoo_crus_land): string[];
        recheck(): void;
        check_unit(unit: $hyoo_crus_unit): string;
        fork(): $hyoo_crus_land;
        gists_ordered(head: string): $hyoo_crus_gist[];
        join(): $hyoo_crus_pass;
        give(dest: typeof $hyoo_crus_ref.Value, rang: $hyoo_crus_rang): $hyoo_crus_gift;
        post(lead: string, head: string, self: string, vary: $hyoo_crus_vary_type, tag?: "keys" | "term" | "solo" | "vals"): $hyoo_crus_gist;
        gist_move(gist: $hyoo_crus_gist, head: string, seat: number): void;
        gist_wipe(gist: $hyoo_crus_gist): void;
        sync(): void;
        bus(): $mol_bus<ArrayBuffer[]>;
        loading(): void;
        saving(): void;
        unit_sign(unit: $hyoo_crus_unit): void;
        gist_encode(gist: $hyoo_crus_gist): $hyoo_crus_gist;
        gist_decode(gist: $hyoo_crus_gist): $hyoo_crus_vary_type;
        gist_decode_raw(gist: $hyoo_crus_gist): $hyoo_crus_vary_type;
        key_public(peer: string): $mol_crypto_key_public | null;
        secret_mutual(peer: string): $mol_crypto_secret | null;
        encryptable(): boolean;
        encrypted(next?: boolean): boolean;
        secret(): $mol_crypto_secret | null;
        dump(): {
            land: symbol & {
                $hyoo_crus_ref: symbol;
            };
            units: $hyoo_crus_unit[];
            rocks: [Uint8Array, Uint8Array][];
        };
    }
}

declare namespace $ {
    class $hyoo_crus_base extends $hyoo_crus_dict {
        title(next?: string): string;
        selection(next?: string): string;
        profiles(): readonly $hyoo_crus_vary_type[];
        Profile(app: string, auto?: any): $hyoo_crus_land | null;
    }
}

declare namespace $ {
    class $hyoo_crus_lord extends $mol_object {
        realm(): $hyoo_crus_realm | null;
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        lands: $mol_wire_dict<string, $hyoo_crus_land>;
        base(): $hyoo_crus_base;
        toString(): string;
        Land(numb: string): $hyoo_crus_land;
        Land_new(idea: number): $hyoo_crus_land;
        Profile<Node extends typeof $hyoo_crus_node>(app: string, Node: Node): InstanceType<Node> | null;
        numb_make(idea?: number): string;
    }
}

declare namespace $ {
    class $hyoo_crus_yard extends $mol_object {
        realm(): $hyoo_crus_realm;
        persisted: WeakSet<$hyoo_crus_unit>;
        load(land: $hyoo_crus_land): readonly $hyoo_crus_unit[];
        save(land: $hyoo_crus_land, units: readonly $hyoo_crus_unit[]): Promise<void>;
        static masters: string[];
        master_cursor(next?: number, force?: true): number;
        master_current(): string;
        master_next(): void;
        reconnects(reset?: null): number;
        master(): $mol_rest_port | null;
        slaves: $mol_wire_set<$mol_rest_port>;
        ports(): $mol_rest_port[];
        port_lands(port: $mol_rest_port, next?: (symbol & {
            $hyoo_crus_ref: symbol;
        })[]): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        sync(): void;
        port_income(port: $mol_rest_port, msg: Uint8Array): void;
        sync_land(land: $hyoo_crus_land): void;
        sync_port_land([port, land]: [$mol_rest_port, $hyoo_crus_land]): void;
        init_port_land([port, land]: [$mol_rest_port, $hyoo_crus_land]): void;
        face_port_land([port, land]: [$mol_rest_port, $hyoo_crus_land], next?: $hyoo_crus_face_map | null): $hyoo_crus_face_map | null;
    }
}

declare namespace $ {
    class $hyoo_crus_realm extends $mol_object {
        lords: $mol_wire_dict<symbol & {
            $hyoo_crus_ref: symbol;
        }, $hyoo_crus_lord>;
        yard(): $hyoo_crus_yard;
        home(): $hyoo_crus_lord;
        Lord(numb: typeof $hyoo_crus_ref.Value): $hyoo_crus_lord;
        Land(ref: typeof $hyoo_crus_ref.Value): $hyoo_crus_land;
        Node<Node extends typeof $hyoo_crus_node>(ref: typeof $hyoo_crus_ref.Value, Node: Node): InstanceType<Node>;
        apply_pack(pack: $hyoo_crus_pack): void;
    }
}

declare namespace $ {
    class $hyoo_crus_app extends $mol_rest_resource_fs {
        sync(): $hyoo_crus_app_sync;
    }
    class $hyoo_crus_app_sync extends $mol_rest_resource {
        _realm: $hyoo_crus_realm;
        _yard(): $hyoo_crus_yard;
        OPEN(msg: $mol_rest_message): void;
        POST(msg: $mol_rest_message): void;
        CLOSE(msg: $mol_rest_message): void;
    }
}

export = $;
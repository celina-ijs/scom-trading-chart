/// <amd-module name="@scom/scom-trading-chart/store/interface.ts" />
declare module "@scom/scom-trading-chart/store/interface.ts" {
    export interface PageBlock {
        getData: () => any;
        setData: (data: any) => Promise<void>;
        getTag: () => any;
        setTag: (tag: any) => Promise<void>;
        validate?: () => boolean;
        defaultEdit?: boolean;
        tag?: any;
        readonly onEdit: () => Promise<void>;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        edit: () => Promise<void>;
        confirm: () => Promise<void>;
        discard: () => Promise<void>;
        config: () => Promise<void>;
    }
    export interface IConfig {
        tokenAddress: string;
        tokenSymbol: string;
        chainId: string | number;
    }
}
/// <amd-module name="@scom/scom-trading-chart/store/dummy/day.json.ts" />
declare module "@scom/scom-trading-chart/store/dummy/day.json.ts" {
    export const day: {
        data: {
            points: {
                "1680423300": {
                    v: number[];
                    c: number[];
                };
                "1680423600": {
                    v: number[];
                    c: number[];
                };
                "1680423900": {
                    v: number[];
                    c: number[];
                };
                "1680424200": {
                    v: number[];
                    c: number[];
                };
                "1680424500": {
                    v: number[];
                    c: number[];
                };
                "1680424800": {
                    v: number[];
                    c: number[];
                };
                "1680425100": {
                    v: number[];
                    c: number[];
                };
                "1680425400": {
                    v: number[];
                    c: number[];
                };
                "1680425700": {
                    v: number[];
                    c: number[];
                };
                "1680426000": {
                    v: number[];
                    c: number[];
                };
                "1680426300": {
                    v: number[];
                    c: number[];
                };
                "1680426600": {
                    v: number[];
                    c: number[];
                };
                "1680426900": {
                    v: number[];
                    c: number[];
                };
                "1680427200": {
                    v: number[];
                    c: number[];
                };
                "1680427500": {
                    v: number[];
                    c: number[];
                };
                "1680427800": {
                    v: number[];
                    c: number[];
                };
                "1680428100": {
                    v: number[];
                    c: number[];
                };
                "1680428400": {
                    v: number[];
                    c: number[];
                };
                "1680428700": {
                    v: number[];
                    c: number[];
                };
                "1680429000": {
                    v: number[];
                    c: number[];
                };
                "1680429300": {
                    v: number[];
                    c: number[];
                };
                "1680429600": {
                    v: number[];
                    c: number[];
                };
                "1680429900": {
                    v: number[];
                    c: number[];
                };
                "1680430200": {
                    v: number[];
                    c: number[];
                };
                "1680430500": {
                    v: number[];
                    c: number[];
                };
                "1680430800": {
                    v: number[];
                    c: number[];
                };
                "1680431100": {
                    v: number[];
                    c: number[];
                };
                "1680431400": {
                    v: number[];
                    c: number[];
                };
                "1680431700": {
                    v: number[];
                    c: number[];
                };
                "1680432000": {
                    v: number[];
                    c: number[];
                };
                "1680432300": {
                    v: number[];
                    c: number[];
                };
                "1680432600": {
                    v: number[];
                    c: number[];
                };
                "1680432900": {
                    v: number[];
                    c: number[];
                };
                "1680433200": {
                    v: number[];
                    c: number[];
                };
                "1680433500": {
                    v: number[];
                    c: number[];
                };
                "1680433800": {
                    v: number[];
                    c: number[];
                };
                "1680434100": {
                    v: number[];
                    c: number[];
                };
                "1680434400": {
                    v: number[];
                    c: number[];
                };
                "1680434700": {
                    v: number[];
                    c: number[];
                };
                "1680435000": {
                    v: number[];
                    c: number[];
                };
                "1680435300": {
                    v: number[];
                    c: number[];
                };
                "1680435600": {
                    v: number[];
                    c: number[];
                };
                "1680435900": {
                    v: number[];
                    c: number[];
                };
                "1680436200": {
                    v: number[];
                    c: number[];
                };
                "1680436500": {
                    v: number[];
                    c: number[];
                };
                "1680436800": {
                    v: number[];
                    c: number[];
                };
                "1680437100": {
                    v: number[];
                    c: number[];
                };
                "1680437400": {
                    v: number[];
                    c: number[];
                };
                "1680437700": {
                    v: number[];
                    c: number[];
                };
                "1680438000": {
                    v: number[];
                    c: number[];
                };
                "1680438300": {
                    v: number[];
                    c: number[];
                };
                "1680438600": {
                    v: number[];
                    c: number[];
                };
                "1680438900": {
                    v: number[];
                    c: number[];
                };
                "1680439200": {
                    v: number[];
                    c: number[];
                };
                "1680439500": {
                    v: number[];
                    c: number[];
                };
                "1680439800": {
                    v: number[];
                    c: number[];
                };
                "1680440100": {
                    v: number[];
                    c: number[];
                };
                "1680440400": {
                    v: number[];
                    c: number[];
                };
                "1680440700": {
                    v: number[];
                    c: number[];
                };
                "1680441000": {
                    v: number[];
                    c: number[];
                };
                "1680441300": {
                    v: number[];
                    c: number[];
                };
                "1680441600": {
                    v: number[];
                    c: number[];
                };
                "1680441900": {
                    v: number[];
                    c: number[];
                };
                "1680442200": {
                    v: number[];
                    c: number[];
                };
                "1680442500": {
                    v: number[];
                    c: number[];
                };
                "1680442800": {
                    v: number[];
                    c: number[];
                };
                "1680443100": {
                    v: number[];
                    c: number[];
                };
                "1680443400": {
                    v: number[];
                    c: number[];
                };
                "1680443700": {
                    v: number[];
                    c: number[];
                };
                "1680444000": {
                    v: number[];
                    c: number[];
                };
                "1680444300": {
                    v: number[];
                    c: number[];
                };
                "1680444600": {
                    v: number[];
                    c: number[];
                };
                "1680444900": {
                    v: number[];
                    c: number[];
                };
                "1680445200": {
                    v: number[];
                    c: number[];
                };
                "1680445500": {
                    v: number[];
                    c: number[];
                };
                "1680445800": {
                    v: number[];
                    c: number[];
                };
                "1680446100": {
                    v: number[];
                    c: number[];
                };
                "1680446400": {
                    v: number[];
                    c: number[];
                };
                "1680446700": {
                    v: number[];
                    c: number[];
                };
                "1680447000": {
                    v: number[];
                    c: number[];
                };
                "1680447300": {
                    v: number[];
                    c: number[];
                };
                "1680447600": {
                    v: number[];
                    c: number[];
                };
                "1680447900": {
                    v: number[];
                    c: number[];
                };
                "1680448200": {
                    v: number[];
                    c: number[];
                };
                "1680448500": {
                    v: number[];
                    c: number[];
                };
                "1680448800": {
                    v: number[];
                    c: number[];
                };
                "1680449100": {
                    v: number[];
                    c: number[];
                };
                "1680449400": {
                    v: number[];
                    c: number[];
                };
                "1680449700": {
                    v: number[];
                    c: number[];
                };
                "1680450000": {
                    v: number[];
                    c: number[];
                };
                "1680450300": {
                    v: number[];
                    c: number[];
                };
                "1680450600": {
                    v: number[];
                    c: number[];
                };
                "1680450900": {
                    v: number[];
                    c: number[];
                };
                "1680451200": {
                    v: number[];
                    c: number[];
                };
                "1680451500": {
                    v: number[];
                    c: number[];
                };
                "1680451800": {
                    v: number[];
                    c: number[];
                };
                "1680452100": {
                    v: number[];
                    c: number[];
                };
                "1680452400": {
                    v: number[];
                    c: number[];
                };
                "1680452700": {
                    v: number[];
                    c: number[];
                };
                "1680453000": {
                    v: number[];
                    c: number[];
                };
                "1680453300": {
                    v: number[];
                    c: number[];
                };
                "1680453600": {
                    v: number[];
                    c: number[];
                };
                "1680453900": {
                    v: number[];
                    c: number[];
                };
                "1680454200": {
                    v: number[];
                    c: number[];
                };
                "1680454500": {
                    v: number[];
                    c: number[];
                };
                "1680454800": {
                    v: number[];
                    c: number[];
                };
                "1680455100": {
                    v: number[];
                    c: number[];
                };
                "1680455400": {
                    v: number[];
                    c: number[];
                };
                "1680455700": {
                    v: number[];
                    c: number[];
                };
                "1680456000": {
                    v: number[];
                    c: number[];
                };
                "1680456300": {
                    v: number[];
                    c: number[];
                };
                "1680456600": {
                    v: number[];
                    c: number[];
                };
                "1680456900": {
                    v: number[];
                    c: number[];
                };
                "1680457200": {
                    v: number[];
                    c: number[];
                };
                "1680457500": {
                    v: number[];
                    c: number[];
                };
                "1680457800": {
                    v: number[];
                    c: number[];
                };
                "1680458100": {
                    v: number[];
                    c: number[];
                };
                "1680458400": {
                    v: number[];
                    c: number[];
                };
                "1680458700": {
                    v: number[];
                    c: number[];
                };
                "1680459000": {
                    v: number[];
                    c: number[];
                };
                "1680459300": {
                    v: number[];
                    c: number[];
                };
                "1680459600": {
                    v: number[];
                    c: number[];
                };
                "1680459900": {
                    v: number[];
                    c: number[];
                };
                "1680460200": {
                    v: number[];
                    c: number[];
                };
                "1680460500": {
                    v: number[];
                    c: number[];
                };
                "1680460800": {
                    v: number[];
                    c: number[];
                };
                "1680461100": {
                    v: number[];
                    c: number[];
                };
                "1680461400": {
                    v: number[];
                    c: number[];
                };
                "1680461700": {
                    v: number[];
                    c: number[];
                };
                "1680462000": {
                    v: number[];
                    c: number[];
                };
                "1680462300": {
                    v: number[];
                    c: number[];
                };
                "1680462600": {
                    v: number[];
                    c: number[];
                };
                "1680462900": {
                    v: number[];
                    c: number[];
                };
                "1680463200": {
                    v: number[];
                    c: number[];
                };
                "1680463500": {
                    v: number[];
                    c: number[];
                };
                "1680463800": {
                    v: number[];
                    c: number[];
                };
                "1680464100": {
                    v: number[];
                    c: number[];
                };
                "1680464400": {
                    v: number[];
                    c: number[];
                };
                "1680464700": {
                    v: number[];
                    c: number[];
                };
                "1680465000": {
                    v: number[];
                    c: number[];
                };
                "1680465300": {
                    v: number[];
                    c: number[];
                };
                "1680465600": {
                    v: number[];
                    c: number[];
                };
                "1680465900": {
                    v: number[];
                    c: number[];
                };
                "1680466200": {
                    v: number[];
                    c: number[];
                };
                "1680466500": {
                    v: number[];
                    c: number[];
                };
                "1680466800": {
                    v: number[];
                    c: number[];
                };
                "1680467100": {
                    v: number[];
                    c: number[];
                };
                "1680467400": {
                    v: number[];
                    c: number[];
                };
                "1680467700": {
                    v: number[];
                    c: number[];
                };
                "1680468000": {
                    v: number[];
                    c: number[];
                };
                "1680468300": {
                    v: number[];
                    c: number[];
                };
                "1680468600": {
                    v: number[];
                    c: number[];
                };
                "1680468900": {
                    v: number[];
                    c: number[];
                };
                "1680469200": {
                    v: number[];
                    c: number[];
                };
                "1680469500": {
                    v: number[];
                    c: number[];
                };
                "1680469800": {
                    v: number[];
                    c: number[];
                };
                "1680470100": {
                    v: number[];
                    c: number[];
                };
                "1680470400": {
                    v: number[];
                    c: number[];
                };
                "1680470700": {
                    v: number[];
                    c: number[];
                };
                "1680471000": {
                    v: number[];
                    c: number[];
                };
                "1680471300": {
                    v: number[];
                    c: number[];
                };
                "1680471600": {
                    v: number[];
                    c: number[];
                };
                "1680471900": {
                    v: number[];
                    c: number[];
                };
                "1680472200": {
                    v: number[];
                    c: number[];
                };
                "1680472500": {
                    v: number[];
                    c: number[];
                };
                "1680472800": {
                    v: number[];
                    c: number[];
                };
                "1680473100": {
                    v: number[];
                    c: number[];
                };
                "1680473400": {
                    v: number[];
                    c: number[];
                };
                "1680473700": {
                    v: number[];
                    c: number[];
                };
                "1680474000": {
                    v: number[];
                    c: number[];
                };
                "1680474300": {
                    v: number[];
                    c: number[];
                };
                "1680474600": {
                    v: number[];
                    c: number[];
                };
                "1680474900": {
                    v: number[];
                    c: number[];
                };
                "1680475200": {
                    v: number[];
                    c: number[];
                };
                "1680475500": {
                    v: number[];
                    c: number[];
                };
                "1680475800": {
                    v: number[];
                    c: number[];
                };
                "1680476100": {
                    v: number[];
                    c: number[];
                };
                "1680476400": {
                    v: number[];
                    c: number[];
                };
                "1680476700": {
                    v: number[];
                    c: number[];
                };
                "1680477000": {
                    v: number[];
                    c: number[];
                };
                "1680477300": {
                    v: number[];
                    c: number[];
                };
                "1680477600": {
                    v: number[];
                    c: number[];
                };
                "1680477900": {
                    v: number[];
                    c: number[];
                };
                "1680478200": {
                    v: number[];
                    c: number[];
                };
                "1680478500": {
                    v: number[];
                    c: number[];
                };
                "1680478800": {
                    v: number[];
                    c: number[];
                };
                "1680479100": {
                    v: number[];
                    c: number[];
                };
                "1680479400": {
                    v: number[];
                    c: number[];
                };
                "1680479700": {
                    v: number[];
                    c: number[];
                };
                "1680480000": {
                    v: number[];
                    c: number[];
                };
                "1680480300": {
                    v: number[];
                    c: number[];
                };
                "1680480600": {
                    v: number[];
                    c: number[];
                };
                "1680480900": {
                    v: number[];
                    c: number[];
                };
                "1680481200": {
                    v: number[];
                    c: number[];
                };
                "1680481500": {
                    v: number[];
                    c: number[];
                };
                "1680481800": {
                    v: number[];
                    c: number[];
                };
                "1680482100": {
                    v: number[];
                    c: number[];
                };
                "1680482400": {
                    v: number[];
                    c: number[];
                };
                "1680482700": {
                    v: number[];
                    c: number[];
                };
                "1680483000": {
                    v: number[];
                    c: number[];
                };
                "1680483300": {
                    v: number[];
                    c: number[];
                };
                "1680483600": {
                    v: number[];
                    c: number[];
                };
                "1680483900": {
                    v: number[];
                    c: number[];
                };
                "1680484200": {
                    v: number[];
                    c: number[];
                };
                "1680484500": {
                    v: number[];
                    c: number[];
                };
                "1680484800": {
                    v: number[];
                    c: number[];
                };
                "1680485100": {
                    v: number[];
                    c: number[];
                };
                "1680485400": {
                    v: number[];
                    c: number[];
                };
                "1680485700": {
                    v: number[];
                    c: number[];
                };
                "1680486000": {
                    v: number[];
                    c: number[];
                };
                "1680486300": {
                    v: number[];
                    c: number[];
                };
                "1680486600": {
                    v: number[];
                    c: number[];
                };
                "1680486900": {
                    v: number[];
                    c: number[];
                };
                "1680487200": {
                    v: number[];
                    c: number[];
                };
                "1680487500": {
                    v: number[];
                    c: number[];
                };
                "1680487800": {
                    v: number[];
                    c: number[];
                };
                "1680488100": {
                    v: number[];
                    c: number[];
                };
                "1680488400": {
                    v: number[];
                    c: number[];
                };
                "1680488700": {
                    v: number[];
                    c: number[];
                };
                "1680489000": {
                    v: number[];
                    c: number[];
                };
                "1680489300": {
                    v: number[];
                    c: number[];
                };
                "1680489600": {
                    v: number[];
                    c: number[];
                };
                "1680489900": {
                    v: number[];
                    c: number[];
                };
                "1680490200": {
                    v: number[];
                    c: number[];
                };
                "1680490500": {
                    v: number[];
                    c: number[];
                };
                "1680490800": {
                    v: number[];
                    c: number[];
                };
                "1680491100": {
                    v: number[];
                    c: number[];
                };
                "1680491400": {
                    v: number[];
                    c: number[];
                };
                "1680491700": {
                    v: number[];
                    c: number[];
                };
                "1680492000": {
                    v: number[];
                    c: number[];
                };
                "1680492300": {
                    v: number[];
                    c: number[];
                };
                "1680492600": {
                    v: number[];
                    c: number[];
                };
                "1680492900": {
                    v: number[];
                    c: number[];
                };
                "1680493200": {
                    v: number[];
                    c: number[];
                };
                "1680493500": {
                    v: number[];
                    c: number[];
                };
                "1680493800": {
                    v: number[];
                    c: number[];
                };
                "1680494100": {
                    v: number[];
                    c: number[];
                };
                "1680494400": {
                    v: number[];
                    c: number[];
                };
                "1680494700": {
                    v: number[];
                    c: number[];
                };
                "1680495000": {
                    v: number[];
                    c: number[];
                };
                "1680495300": {
                    v: number[];
                    c: number[];
                };
                "1680495600": {
                    v: number[];
                    c: number[];
                };
                "1680495900": {
                    v: number[];
                    c: number[];
                };
                "1680496200": {
                    v: number[];
                    c: number[];
                };
                "1680496500": {
                    v: number[];
                    c: number[];
                };
                "1680496800": {
                    v: number[];
                    c: number[];
                };
                "1680497100": {
                    v: number[];
                    c: number[];
                };
                "1680497400": {
                    v: number[];
                    c: number[];
                };
                "1680497700": {
                    v: number[];
                    c: number[];
                };
                "1680498000": {
                    v: number[];
                    c: number[];
                };
                "1680498300": {
                    v: number[];
                    c: number[];
                };
                "1680498600": {
                    v: number[];
                    c: number[];
                };
                "1680498900": {
                    v: number[];
                    c: number[];
                };
                "1680499200": {
                    v: number[];
                    c: number[];
                };
                "1680499500": {
                    v: number[];
                    c: number[];
                };
                "1680499800": {
                    v: number[];
                    c: number[];
                };
                "1680500100": {
                    v: number[];
                    c: number[];
                };
                "1680500400": {
                    v: number[];
                    c: number[];
                };
                "1680500700": {
                    v: number[];
                    c: number[];
                };
                "1680501000": {
                    v: number[];
                    c: number[];
                };
                "1680501300": {
                    v: number[];
                    c: number[];
                };
                "1680501600": {
                    v: number[];
                    c: number[];
                };
                "1680501900": {
                    v: number[];
                    c: number[];
                };
                "1680502200": {
                    v: number[];
                    c: number[];
                };
                "1680502500": {
                    v: number[];
                    c: number[];
                };
                "1680502800": {
                    v: number[];
                    c: number[];
                };
                "1680503100": {
                    v: number[];
                    c: number[];
                };
                "1680503400": {
                    v: number[];
                    c: number[];
                };
                "1680503700": {
                    v: number[];
                    c: number[];
                };
                "1680504300": {
                    v: number[];
                    c: number[];
                };
                "1680504600": {
                    v: number[];
                    c: number[];
                };
                "1680504900": {
                    v: number[];
                    c: number[];
                };
                "1680505500": {
                    v: number[];
                    c: number[];
                };
                "1680506100": {
                    v: number[];
                    c: number[];
                };
                "1680506700": {
                    v: number[];
                    c: number[];
                };
                "1680507300": {
                    v: number[];
                    c: number[];
                };
                "1680507900": {
                    v: number[];
                    c: number[];
                };
                "1680508500": {
                    v: number[];
                    c: number[];
                };
                "1680509100": {
                    v: number[];
                    c: number[];
                };
                "1680509684": {
                    v: number[];
                };
            };
        };
        status: {
            timestamp: string;
            error_code: string;
            error_message: string;
            elapsed: string;
            credit_count: number;
        };
    };
}
/// <amd-module name="@scom/scom-trading-chart/store/dummy/week.json.ts" />
declare module "@scom/scom-trading-chart/store/dummy/week.json.ts" {
    export const week: {
        data: {
            points: {
                "1679973600": {
                    v: number[];
                    c: number[];
                };
                "1679974500": {
                    v: number[];
                    c: number[];
                };
                "1679975400": {
                    v: number[];
                    c: number[];
                };
                "1679976300": {
                    v: number[];
                    c: number[];
                };
                "1679977200": {
                    v: number[];
                    c: number[];
                };
                "1679978100": {
                    v: number[];
                    c: number[];
                };
                "1679979000": {
                    v: number[];
                    c: number[];
                };
                "1679979900": {
                    v: number[];
                    c: number[];
                };
                "1679980800": {
                    v: number[];
                    c: number[];
                };
                "1679981400": {
                    v: number[];
                    c: number[];
                };
                "1679982300": {
                    v: number[];
                    c: number[];
                };
                "1679983200": {
                    v: number[];
                    c: number[];
                };
                "1679984100": {
                    v: number[];
                    c: number[];
                };
                "1679985000": {
                    v: number[];
                    c: number[];
                };
                "1679985900": {
                    v: number[];
                    c: number[];
                };
                "1679986800": {
                    v: number[];
                    c: number[];
                };
                "1679987700": {
                    v: number[];
                    c: number[];
                };
                "1679988300": {
                    v: number[];
                    c: number[];
                };
                "1679989200": {
                    v: number[];
                    c: number[];
                };
                "1679990100": {
                    v: number[];
                    c: number[];
                };
                "1679991000": {
                    v: number[];
                    c: number[];
                };
                "1679991900": {
                    v: number[];
                    c: number[];
                };
                "1679992800": {
                    v: number[];
                    c: number[];
                };
                "1679993700": {
                    v: number[];
                    c: number[];
                };
                "1679994600": {
                    v: number[];
                    c: number[];
                };
                "1679995200": {
                    v: number[];
                    c: number[];
                };
                "1679996100": {
                    v: number[];
                    c: number[];
                };
                "1679997000": {
                    v: number[];
                    c: number[];
                };
                "1679997900": {
                    v: number[];
                    c: number[];
                };
                "1679998800": {
                    v: number[];
                    c: number[];
                };
                "1679999700": {
                    v: number[];
                    c: number[];
                };
                "1680000600": {
                    v: number[];
                    c: number[];
                };
                "1680001500": {
                    v: number[];
                    c: number[];
                };
                "1680002100": {
                    v: number[];
                    c: number[];
                };
                "1680003000": {
                    v: number[];
                    c: number[];
                };
                "1680003900": {
                    v: number[];
                    c: number[];
                };
                "1680004800": {
                    v: number[];
                    c: number[];
                };
                "1680005700": {
                    v: number[];
                    c: number[];
                };
                "1680006600": {
                    v: number[];
                    c: number[];
                };
                "1680007500": {
                    v: number[];
                    c: number[];
                };
                "1680008400": {
                    v: number[];
                    c: number[];
                };
                "1680009000": {
                    v: number[];
                    c: number[];
                };
                "1680009900": {
                    v: number[];
                    c: number[];
                };
                "1680010800": {
                    v: number[];
                    c: number[];
                };
                "1680011700": {
                    v: number[];
                    c: number[];
                };
                "1680012600": {
                    v: number[];
                    c: number[];
                };
                "1680013500": {
                    v: number[];
                    c: number[];
                };
                "1680014400": {
                    v: number[];
                    c: number[];
                };
                "1680015300": {
                    v: number[];
                    c: number[];
                };
                "1680015900": {
                    v: number[];
                    c: number[];
                };
                "1680016800": {
                    v: number[];
                    c: number[];
                };
                "1680017700": {
                    v: number[];
                    c: number[];
                };
                "1680018600": {
                    v: number[];
                    c: number[];
                };
                "1680019500": {
                    v: number[];
                    c: number[];
                };
                "1680020400": {
                    v: number[];
                    c: number[];
                };
                "1680021300": {
                    v: number[];
                    c: number[];
                };
                "1680022200": {
                    v: number[];
                    c: number[];
                };
                "1680022800": {
                    v: number[];
                    c: number[];
                };
                "1680023700": {
                    v: number[];
                    c: number[];
                };
                "1680024600": {
                    v: number[];
                    c: number[];
                };
                "1680025500": {
                    v: number[];
                    c: number[];
                };
                "1680026400": {
                    v: number[];
                    c: number[];
                };
                "1680027300": {
                    v: number[];
                    c: number[];
                };
                "1680028200": {
                    v: number[];
                    c: number[];
                };
                "1680029100": {
                    v: number[];
                    c: number[];
                };
                "1680029700": {
                    v: number[];
                    c: number[];
                };
                "1680030600": {
                    v: number[];
                    c: number[];
                };
                "1680031500": {
                    v: number[];
                    c: number[];
                };
                "1680032400": {
                    v: number[];
                    c: number[];
                };
                "1680033300": {
                    v: number[];
                    c: number[];
                };
                "1680034200": {
                    v: number[];
                    c: number[];
                };
                "1680035100": {
                    v: number[];
                    c: number[];
                };
                "1680036000": {
                    v: number[];
                    c: number[];
                };
                "1680036600": {
                    v: number[];
                    c: number[];
                };
                "1680037500": {
                    v: number[];
                    c: number[];
                };
                "1680038400": {
                    v: number[];
                    c: number[];
                };
                "1680039300": {
                    v: number[];
                    c: number[];
                };
                "1680040200": {
                    v: number[];
                    c: number[];
                };
                "1680041100": {
                    v: number[];
                    c: number[];
                };
                "1680042000": {
                    v: number[];
                    c: number[];
                };
                "1680042900": {
                    v: number[];
                    c: number[];
                };
                "1680043800": {
                    v: number[];
                    c: number[];
                };
                "1680044400": {
                    v: number[];
                    c: number[];
                };
                "1680045300": {
                    v: number[];
                    c: number[];
                };
                "1680046200": {
                    v: number[];
                    c: number[];
                };
                "1680047100": {
                    v: number[];
                    c: number[];
                };
                "1680048000": {
                    v: number[];
                    c: number[];
                };
                "1680048900": {
                    v: number[];
                    c: number[];
                };
                "1680049800": {
                    v: number[];
                    c: number[];
                };
                "1680050700": {
                    v: number[];
                    c: number[];
                };
                "1680051300": {
                    v: number[];
                    c: number[];
                };
                "1680052200": {
                    v: number[];
                    c: number[];
                };
                "1680053100": {
                    v: number[];
                    c: number[];
                };
                "1680054000": {
                    v: number[];
                    c: number[];
                };
                "1680054900": {
                    v: number[];
                    c: number[];
                };
                "1680055800": {
                    v: number[];
                    c: number[];
                };
                "1680056700": {
                    v: number[];
                    c: number[];
                };
                "1680057600": {
                    v: number[];
                    c: number[];
                };
                "1680058200": {
                    v: number[];
                    c: number[];
                };
                "1680059100": {
                    v: number[];
                    c: number[];
                };
                "1680060000": {
                    v: number[];
                    c: number[];
                };
                "1680060900": {
                    v: number[];
                    c: number[];
                };
                "1680061800": {
                    v: number[];
                    c: number[];
                };
                "1680062700": {
                    v: number[];
                    c: number[];
                };
                "1680063600": {
                    v: number[];
                    c: number[];
                };
                "1680064500": {
                    v: number[];
                    c: number[];
                };
                "1680065100": {
                    v: number[];
                    c: number[];
                };
                "1680066000": {
                    v: number[];
                    c: number[];
                };
                "1680066900": {
                    v: number[];
                    c: number[];
                };
                "1680067800": {
                    v: number[];
                    c: number[];
                };
                "1680068700": {
                    v: number[];
                    c: number[];
                };
                "1680069600": {
                    v: number[];
                    c: number[];
                };
                "1680070500": {
                    v: number[];
                    c: number[];
                };
                "1680071400": {
                    v: number[];
                    c: number[];
                };
                "1680072000": {
                    v: number[];
                    c: number[];
                };
                "1680072900": {
                    v: number[];
                    c: number[];
                };
                "1680073800": {
                    v: number[];
                    c: number[];
                };
                "1680074700": {
                    v: number[];
                    c: number[];
                };
                "1680075600": {
                    v: number[];
                    c: number[];
                };
                "1680076500": {
                    v: number[];
                    c: number[];
                };
                "1680077400": {
                    v: number[];
                    c: number[];
                };
                "1680078300": {
                    v: number[];
                    c: number[];
                };
                "1680078900": {
                    v: number[];
                    c: number[];
                };
                "1680079800": {
                    v: number[];
                    c: number[];
                };
                "1680080700": {
                    v: number[];
                    c: number[];
                };
                "1680081600": {
                    v: number[];
                    c: number[];
                };
                "1680082500": {
                    v: number[];
                    c: number[];
                };
                "1680083400": {
                    v: number[];
                    c: number[];
                };
                "1680084300": {
                    v: number[];
                    c: number[];
                };
                "1680085200": {
                    v: number[];
                    c: number[];
                };
                "1680085800": {
                    v: number[];
                    c: number[];
                };
                "1680086700": {
                    v: number[];
                    c: number[];
                };
                "1680087600": {
                    v: number[];
                    c: number[];
                };
                "1680088500": {
                    v: number[];
                    c: number[];
                };
                "1680089400": {
                    v: number[];
                    c: number[];
                };
                "1680090300": {
                    v: number[];
                    c: number[];
                };
                "1680091200": {
                    v: number[];
                    c: number[];
                };
                "1680092100": {
                    v: number[];
                    c: number[];
                };
                "1680092700": {
                    v: number[];
                    c: number[];
                };
                "1680093600": {
                    v: number[];
                    c: number[];
                };
                "1680094500": {
                    v: number[];
                    c: number[];
                };
                "1680095400": {
                    v: number[];
                    c: number[];
                };
                "1680096300": {
                    v: number[];
                    c: number[];
                };
                "1680097200": {
                    v: number[];
                    c: number[];
                };
                "1680098100": {
                    v: number[];
                    c: number[];
                };
                "1680099000": {
                    v: number[];
                    c: number[];
                };
                "1680099600": {
                    v: number[];
                    c: number[];
                };
                "1680100500": {
                    v: number[];
                    c: number[];
                };
                "1680101400": {
                    v: number[];
                    c: number[];
                };
                "1680102300": {
                    v: number[];
                    c: number[];
                };
                "1680103200": {
                    v: number[];
                    c: number[];
                };
                "1680104100": {
                    v: number[];
                    c: number[];
                };
                "1680105000": {
                    v: number[];
                    c: number[];
                };
                "1680105900": {
                    v: number[];
                    c: number[];
                };
                "1680106800": {
                    v: number[];
                    c: number[];
                };
                "1680107400": {
                    v: number[];
                    c: number[];
                };
                "1680108300": {
                    v: number[];
                    c: number[];
                };
                "1680109200": {
                    v: number[];
                    c: number[];
                };
                "1680110100": {
                    v: number[];
                    c: number[];
                };
                "1680111000": {
                    v: number[];
                    c: number[];
                };
                "1680111900": {
                    v: number[];
                    c: number[];
                };
                "1680112800": {
                    v: number[];
                    c: number[];
                };
                "1680113700": {
                    v: number[];
                    c: number[];
                };
                "1680114300": {
                    v: number[];
                    c: number[];
                };
                "1680115200": {
                    v: number[];
                    c: number[];
                };
                "1680116100": {
                    v: number[];
                    c: number[];
                };
                "1680117000": {
                    v: number[];
                    c: number[];
                };
                "1680117900": {
                    v: number[];
                    c: number[];
                };
                "1680118800": {
                    v: number[];
                    c: number[];
                };
                "1680119700": {
                    v: number[];
                    c: number[];
                };
                "1680120600": {
                    v: number[];
                    c: number[];
                };
                "1680121200": {
                    v: number[];
                    c: number[];
                };
                "1680122100": {
                    v: number[];
                    c: number[];
                };
                "1680123000": {
                    v: number[];
                    c: number[];
                };
                "1680123900": {
                    v: number[];
                    c: number[];
                };
                "1680124800": {
                    v: number[];
                    c: number[];
                };
                "1680125700": {
                    v: number[];
                    c: number[];
                };
                "1680126600": {
                    v: number[];
                    c: number[];
                };
                "1680127500": {
                    v: number[];
                    c: number[];
                };
                "1680128100": {
                    v: number[];
                    c: number[];
                };
                "1680129000": {
                    v: number[];
                    c: number[];
                };
                "1680129900": {
                    v: number[];
                    c: number[];
                };
                "1680130800": {
                    v: number[];
                    c: number[];
                };
                "1680131700": {
                    v: number[];
                    c: number[];
                };
                "1680132600": {
                    v: number[];
                    c: number[];
                };
                "1680133500": {
                    v: number[];
                    c: number[];
                };
                "1680134400": {
                    v: number[];
                    c: number[];
                };
                "1680135000": {
                    v: number[];
                    c: number[];
                };
                "1680135900": {
                    v: number[];
                    c: number[];
                };
                "1680136800": {
                    v: number[];
                    c: number[];
                };
                "1680137700": {
                    v: number[];
                    c: number[];
                };
                "1680138600": {
                    v: number[];
                    c: number[];
                };
                "1680139500": {
                    v: number[];
                    c: number[];
                };
                "1680140400": {
                    v: number[];
                    c: number[];
                };
                "1680141300": {
                    v: number[];
                    c: number[];
                };
                "1680141900": {
                    v: number[];
                    c: number[];
                };
                "1680142800": {
                    v: number[];
                    c: number[];
                };
                "1680143700": {
                    v: number[];
                    c: number[];
                };
                "1680144600": {
                    v: number[];
                    c: number[];
                };
                "1680145500": {
                    v: number[];
                    c: number[];
                };
                "1680146400": {
                    v: number[];
                    c: number[];
                };
                "1680147300": {
                    v: number[];
                    c: number[];
                };
                "1680148200": {
                    v: number[];
                    c: number[];
                };
                "1680148800": {
                    v: number[];
                    c: number[];
                };
                "1680149700": {
                    v: number[];
                    c: number[];
                };
                "1680150600": {
                    v: number[];
                    c: number[];
                };
                "1680151500": {
                    v: number[];
                    c: number[];
                };
                "1680152400": {
                    v: number[];
                    c: number[];
                };
                "1680153300": {
                    v: number[];
                    c: number[];
                };
                "1680154200": {
                    v: number[];
                    c: number[];
                };
                "1680155100": {
                    v: number[];
                    c: number[];
                };
                "1680155700": {
                    v: number[];
                    c: number[];
                };
                "1680156600": {
                    v: number[];
                    c: number[];
                };
                "1680157500": {
                    v: number[];
                    c: number[];
                };
                "1680158400": {
                    v: number[];
                    c: number[];
                };
                "1680159300": {
                    v: number[];
                    c: number[];
                };
                "1680160200": {
                    v: number[];
                    c: number[];
                };
                "1680161100": {
                    v: number[];
                    c: number[];
                };
                "1680162000": {
                    v: number[];
                    c: number[];
                };
                "1680162600": {
                    v: number[];
                    c: number[];
                };
                "1680163500": {
                    v: number[];
                    c: number[];
                };
                "1680164400": {
                    v: number[];
                    c: number[];
                };
                "1680165300": {
                    v: number[];
                    c: number[];
                };
                "1680166200": {
                    v: number[];
                    c: number[];
                };
                "1680167100": {
                    v: number[];
                    c: number[];
                };
                "1680168000": {
                    v: number[];
                    c: number[];
                };
                "1680168900": {
                    v: number[];
                    c: number[];
                };
                "1680169800": {
                    v: number[];
                    c: number[];
                };
                "1680170400": {
                    v: number[];
                    c: number[];
                };
                "1680171300": {
                    v: number[];
                    c: number[];
                };
                "1680172200": {
                    v: number[];
                    c: number[];
                };
                "1680173100": {
                    v: number[];
                    c: number[];
                };
                "1680174000": {
                    v: number[];
                    c: number[];
                };
                "1680174900": {
                    v: number[];
                    c: number[];
                };
                "1680175800": {
                    v: number[];
                    c: number[];
                };
                "1680176700": {
                    v: number[];
                    c: number[];
                };
                "1680177300": {
                    v: number[];
                    c: number[];
                };
                "1680178200": {
                    v: number[];
                    c: number[];
                };
                "1680179100": {
                    v: number[];
                    c: number[];
                };
                "1680180000": {
                    v: number[];
                    c: number[];
                };
                "1680180900": {
                    v: number[];
                    c: number[];
                };
                "1680181800": {
                    v: number[];
                    c: number[];
                };
                "1680182700": {
                    v: number[];
                    c: number[];
                };
                "1680183600": {
                    v: number[];
                    c: number[];
                };
                "1680184200": {
                    v: number[];
                    c: number[];
                };
                "1680185100": {
                    v: number[];
                    c: number[];
                };
                "1680186000": {
                    v: number[];
                    c: number[];
                };
                "1680186900": {
                    v: number[];
                    c: number[];
                };
                "1680187800": {
                    v: number[];
                    c: number[];
                };
                "1680188700": {
                    v: number[];
                    c: number[];
                };
                "1680189600": {
                    v: number[];
                    c: number[];
                };
                "1680190500": {
                    v: number[];
                    c: number[];
                };
                "1680191100": {
                    v: number[];
                    c: number[];
                };
                "1680192000": {
                    v: number[];
                    c: number[];
                };
                "1680192900": {
                    v: number[];
                    c: number[];
                };
                "1680193800": {
                    v: number[];
                    c: number[];
                };
                "1680194700": {
                    v: number[];
                    c: number[];
                };
                "1680195600": {
                    v: number[];
                    c: number[];
                };
                "1680196500": {
                    v: number[];
                    c: number[];
                };
                "1680197400": {
                    v: number[];
                    c: number[];
                };
                "1680198000": {
                    v: number[];
                    c: number[];
                };
                "1680198900": {
                    v: number[];
                    c: number[];
                };
                "1680199800": {
                    v: number[];
                    c: number[];
                };
                "1680200700": {
                    v: number[];
                    c: number[];
                };
                "1680201600": {
                    v: number[];
                    c: number[];
                };
                "1680202500": {
                    v: number[];
                    c: number[];
                };
                "1680203400": {
                    v: number[];
                    c: number[];
                };
                "1680204300": {
                    v: number[];
                    c: number[];
                };
                "1680204900": {
                    v: number[];
                    c: number[];
                };
                "1680205800": {
                    v: number[];
                    c: number[];
                };
                "1680206700": {
                    v: number[];
                    c: number[];
                };
                "1680207600": {
                    v: number[];
                    c: number[];
                };
                "1680208500": {
                    v: number[];
                    c: number[];
                };
                "1680209400": {
                    v: number[];
                    c: number[];
                };
                "1680210300": {
                    v: number[];
                    c: number[];
                };
                "1680211200": {
                    v: number[];
                    c: number[];
                };
                "1680211800": {
                    v: number[];
                    c: number[];
                };
                "1680212700": {
                    v: number[];
                    c: number[];
                };
                "1680213600": {
                    v: number[];
                    c: number[];
                };
                "1680214500": {
                    v: number[];
                    c: number[];
                };
                "1680215400": {
                    v: number[];
                    c: number[];
                };
                "1680216300": {
                    v: number[];
                    c: number[];
                };
                "1680217200": {
                    v: number[];
                    c: number[];
                };
                "1680218100": {
                    v: number[];
                    c: number[];
                };
                "1680218700": {
                    v: number[];
                    c: number[];
                };
                "1680219600": {
                    v: number[];
                    c: number[];
                };
                "1680220500": {
                    v: number[];
                    c: number[];
                };
                "1680221400": {
                    v: number[];
                    c: number[];
                };
                "1680222300": {
                    v: number[];
                    c: number[];
                };
                "1680223200": {
                    v: number[];
                    c: number[];
                };
                "1680224100": {
                    v: number[];
                    c: number[];
                };
                "1680225000": {
                    v: number[];
                    c: number[];
                };
                "1680225600": {
                    v: number[];
                    c: number[];
                };
                "1680226500": {
                    v: number[];
                    c: number[];
                };
                "1680227400": {
                    v: number[];
                    c: number[];
                };
                "1680228300": {
                    v: number[];
                    c: number[];
                };
                "1680229200": {
                    v: number[];
                    c: number[];
                };
                "1680230100": {
                    v: number[];
                    c: number[];
                };
                "1680231000": {
                    v: number[];
                    c: number[];
                };
                "1680231900": {
                    v: number[];
                    c: number[];
                };
                "1680232500": {
                    v: number[];
                    c: number[];
                };
                "1680233400": {
                    v: number[];
                    c: number[];
                };
                "1680234300": {
                    v: number[];
                    c: number[];
                };
                "1680235200": {
                    v: number[];
                    c: number[];
                };
                "1680236100": {
                    v: number[];
                    c: number[];
                };
                "1680237000": {
                    v: number[];
                    c: number[];
                };
                "1680237900": {
                    v: number[];
                    c: number[];
                };
                "1680238800": {
                    v: number[];
                    c: number[];
                };
                "1680239700": {
                    v: number[];
                    c: number[];
                };
                "1680240300": {
                    v: number[];
                    c: number[];
                };
                "1680241200": {
                    v: number[];
                    c: number[];
                };
                "1680242100": {
                    v: number[];
                    c: number[];
                };
                "1680243000": {
                    v: number[];
                    c: number[];
                };
                "1680243900": {
                    v: number[];
                    c: number[];
                };
                "1680244800": {
                    v: number[];
                    c: number[];
                };
                "1680245700": {
                    v: number[];
                    c: number[];
                };
                "1680246600": {
                    v: number[];
                    c: number[];
                };
                "1680247200": {
                    v: number[];
                    c: number[];
                };
                "1680248100": {
                    v: number[];
                    c: number[];
                };
                "1680249000": {
                    v: number[];
                    c: number[];
                };
                "1680249900": {
                    v: number[];
                    c: number[];
                };
                "1680250800": {
                    v: number[];
                    c: number[];
                };
                "1680251700": {
                    v: number[];
                    c: number[];
                };
                "1680252600": {
                    v: number[];
                    c: number[];
                };
                "1680253500": {
                    v: number[];
                    c: number[];
                };
                "1680254100": {
                    v: number[];
                    c: number[];
                };
                "1680255000": {
                    v: number[];
                    c: number[];
                };
                "1680255900": {
                    v: number[];
                    c: number[];
                };
                "1680256800": {
                    v: number[];
                    c: number[];
                };
                "1680257700": {
                    v: number[];
                    c: number[];
                };
                "1680258600": {
                    v: number[];
                    c: number[];
                };
                "1680259500": {
                    v: number[];
                    c: number[];
                };
                "1680260400": {
                    v: number[];
                    c: number[];
                };
                "1680261000": {
                    v: number[];
                    c: number[];
                };
                "1680261900": {
                    v: number[];
                    c: number[];
                };
                "1680262800": {
                    v: number[];
                    c: number[];
                };
                "1680263700": {
                    v: number[];
                    c: number[];
                };
                "1680264600": {
                    v: number[];
                    c: number[];
                };
                "1680265500": {
                    v: number[];
                    c: number[];
                };
                "1680266400": {
                    v: number[];
                    c: number[];
                };
                "1680267300": {
                    v: number[];
                    c: number[];
                };
                "1680267900": {
                    v: number[];
                    c: number[];
                };
                "1680268800": {
                    v: number[];
                    c: number[];
                };
                "1680269700": {
                    v: number[];
                    c: number[];
                };
                "1680270600": {
                    v: number[];
                    c: number[];
                };
                "1680271500": {
                    v: number[];
                    c: number[];
                };
                "1680272400": {
                    v: number[];
                    c: number[];
                };
                "1680273300": {
                    v: number[];
                    c: number[];
                };
                "1680274200": {
                    v: number[];
                    c: number[];
                };
                "1680274800": {
                    v: number[];
                    c: number[];
                };
                "1680275700": {
                    v: number[];
                    c: number[];
                };
                "1680276600": {
                    v: number[];
                    c: number[];
                };
                "1680277500": {
                    v: number[];
                    c: number[];
                };
                "1680278400": {
                    v: number[];
                    c: number[];
                };
                "1680279300": {
                    v: number[];
                    c: number[];
                };
                "1680280200": {
                    v: number[];
                    c: number[];
                };
                "1680281100": {
                    v: number[];
                    c: number[];
                };
                "1680281700": {
                    v: number[];
                    c: number[];
                };
                "1680282600": {
                    v: number[];
                    c: number[];
                };
                "1680283500": {
                    v: number[];
                    c: number[];
                };
                "1680284400": {
                    v: number[];
                    c: number[];
                };
                "1680285300": {
                    v: number[];
                    c: number[];
                };
                "1680286200": {
                    v: number[];
                    c: number[];
                };
                "1680287100": {
                    v: number[];
                    c: number[];
                };
                "1680288000": {
                    v: number[];
                    c: number[];
                };
                "1680288600": {
                    v: number[];
                    c: number[];
                };
                "1680289500": {
                    v: number[];
                    c: number[];
                };
                "1680290400": {
                    v: number[];
                    c: number[];
                };
                "1680291300": {
                    v: number[];
                    c: number[];
                };
                "1680292200": {
                    v: number[];
                    c: number[];
                };
                "1680293100": {
                    v: number[];
                    c: number[];
                };
                "1680294000": {
                    v: number[];
                    c: number[];
                };
                "1680294900": {
                    v: number[];
                    c: number[];
                };
                "1680295500": {
                    v: number[];
                    c: number[];
                };
                "1680296400": {
                    v: number[];
                    c: number[];
                };
                "1680297300": {
                    v: number[];
                    c: number[];
                };
                "1680298200": {
                    v: number[];
                    c: number[];
                };
                "1680299100": {
                    v: number[];
                    c: number[];
                };
                "1680300000": {
                    v: number[];
                    c: number[];
                };
                "1680300900": {
                    v: number[];
                    c: number[];
                };
                "1680301800": {
                    v: number[];
                    c: number[];
                };
                "1680302700": {
                    v: number[];
                    c: number[];
                };
                "1680303300": {
                    v: number[];
                    c: number[];
                };
                "1680304200": {
                    v: number[];
                    c: number[];
                };
                "1680305100": {
                    v: number[];
                    c: number[];
                };
                "1680306000": {
                    v: number[];
                    c: number[];
                };
                "1680306900": {
                    v: number[];
                    c: number[];
                };
                "1680307800": {
                    v: number[];
                    c: number[];
                };
                "1680308700": {
                    v: number[];
                    c: number[];
                };
                "1680309600": {
                    v: number[];
                    c: number[];
                };
                "1680310200": {
                    v: number[];
                    c: number[];
                };
                "1680311100": {
                    v: number[];
                    c: number[];
                };
                "1680312000": {
                    v: number[];
                    c: number[];
                };
                "1680312900": {
                    v: number[];
                    c: number[];
                };
                "1680313800": {
                    v: number[];
                    c: number[];
                };
                "1680314700": {
                    v: number[];
                    c: number[];
                };
                "1680315600": {
                    v: number[];
                    c: number[];
                };
                "1680316500": {
                    v: number[];
                    c: number[];
                };
                "1680317100": {
                    v: number[];
                    c: number[];
                };
                "1680318000": {
                    v: number[];
                    c: number[];
                };
                "1680318900": {
                    v: number[];
                    c: number[];
                };
                "1680319800": {
                    v: number[];
                    c: number[];
                };
                "1680320700": {
                    v: number[];
                    c: number[];
                };
                "1680321600": {
                    v: number[];
                    c: number[];
                };
                "1680322500": {
                    v: number[];
                    c: number[];
                };
                "1680323400": {
                    v: number[];
                    c: number[];
                };
                "1680324000": {
                    v: number[];
                    c: number[];
                };
                "1680324900": {
                    v: number[];
                    c: number[];
                };
                "1680325800": {
                    v: number[];
                    c: number[];
                };
                "1680326700": {
                    v: number[];
                    c: number[];
                };
                "1680327600": {
                    v: number[];
                    c: number[];
                };
                "1680328500": {
                    v: number[];
                    c: number[];
                };
                "1680329400": {
                    v: number[];
                    c: number[];
                };
                "1680330300": {
                    v: number[];
                    c: number[];
                };
                "1680330900": {
                    v: number[];
                    c: number[];
                };
                "1680331800": {
                    v: number[];
                    c: number[];
                };
                "1680332700": {
                    v: number[];
                    c: number[];
                };
                "1680333600": {
                    v: number[];
                    c: number[];
                };
                "1680334500": {
                    v: number[];
                    c: number[];
                };
                "1680335400": {
                    v: number[];
                    c: number[];
                };
                "1680336300": {
                    v: number[];
                    c: number[];
                };
                "1680337200": {
                    v: number[];
                    c: number[];
                };
                "1680337800": {
                    v: number[];
                    c: number[];
                };
                "1680338700": {
                    v: number[];
                    c: number[];
                };
                "1680339600": {
                    v: number[];
                    c: number[];
                };
                "1680340500": {
                    v: number[];
                    c: number[];
                };
                "1680341400": {
                    v: number[];
                    c: number[];
                };
                "1680342300": {
                    v: number[];
                    c: number[];
                };
                "1680343200": {
                    v: number[];
                    c: number[];
                };
                "1680344100": {
                    v: number[];
                    c: number[];
                };
                "1680344700": {
                    v: number[];
                    c: number[];
                };
                "1680345600": {
                    v: number[];
                    c: number[];
                };
                "1680346500": {
                    v: number[];
                    c: number[];
                };
                "1680347400": {
                    v: number[];
                    c: number[];
                };
                "1680348300": {
                    v: number[];
                    c: number[];
                };
                "1680349200": {
                    v: number[];
                    c: number[];
                };
                "1680350100": {
                    v: number[];
                    c: number[];
                };
                "1680351000": {
                    v: number[];
                    c: number[];
                };
                "1680351600": {
                    v: number[];
                    c: number[];
                };
                "1680352500": {
                    v: number[];
                    c: number[];
                };
                "1680353400": {
                    v: number[];
                    c: number[];
                };
                "1680354300": {
                    v: number[];
                    c: number[];
                };
                "1680355200": {
                    v: number[];
                    c: number[];
                };
                "1680356100": {
                    v: number[];
                    c: number[];
                };
                "1680357000": {
                    v: number[];
                    c: number[];
                };
                "1680357900": {
                    v: number[];
                    c: number[];
                };
                "1680358500": {
                    v: number[];
                    c: number[];
                };
                "1680359400": {
                    v: number[];
                    c: number[];
                };
                "1680360300": {
                    v: number[];
                    c: number[];
                };
                "1680361200": {
                    v: number[];
                    c: number[];
                };
                "1680362100": {
                    v: number[];
                    c: number[];
                };
                "1680363000": {
                    v: number[];
                    c: number[];
                };
                "1680363900": {
                    v: number[];
                    c: number[];
                };
                "1680364800": {
                    v: number[];
                    c: number[];
                };
                "1680365700": {
                    v: number[];
                    c: number[];
                };
                "1680366300": {
                    v: number[];
                    c: number[];
                };
                "1680367200": {
                    v: number[];
                    c: number[];
                };
                "1680368100": {
                    v: number[];
                    c: number[];
                };
                "1680369000": {
                    v: number[];
                    c: number[];
                };
                "1680369900": {
                    v: number[];
                    c: number[];
                };
                "1680370800": {
                    v: number[];
                    c: number[];
                };
                "1680371700": {
                    v: number[];
                    c: number[];
                };
                "1680372600": {
                    v: number[];
                    c: number[];
                };
                "1680373200": {
                    v: number[];
                    c: number[];
                };
                "1680374100": {
                    v: number[];
                    c: number[];
                };
                "1680375000": {
                    v: number[];
                    c: number[];
                };
                "1680375900": {
                    v: number[];
                    c: number[];
                };
                "1680376800": {
                    v: number[];
                    c: number[];
                };
                "1680377700": {
                    v: number[];
                    c: number[];
                };
                "1680378600": {
                    v: number[];
                    c: number[];
                };
                "1680379500": {
                    v: number[];
                    c: number[];
                };
                "1680380100": {
                    v: number[];
                    c: number[];
                };
                "1680381000": {
                    v: number[];
                    c: number[];
                };
                "1680381900": {
                    v: number[];
                    c: number[];
                };
                "1680382800": {
                    v: number[];
                    c: number[];
                };
                "1680383700": {
                    v: number[];
                    c: number[];
                };
                "1680384600": {
                    v: number[];
                    c: number[];
                };
                "1680385500": {
                    v: number[];
                    c: number[];
                };
                "1680386400": {
                    v: number[];
                    c: number[];
                };
                "1680387000": {
                    v: number[];
                    c: number[];
                };
                "1680387900": {
                    v: number[];
                    c: number[];
                };
                "1680388800": {
                    v: number[];
                    c: number[];
                };
                "1680389700": {
                    v: number[];
                    c: number[];
                };
                "1680390600": {
                    v: number[];
                    c: number[];
                };
                "1680391500": {
                    v: number[];
                    c: number[];
                };
                "1680392400": {
                    v: number[];
                    c: number[];
                };
                "1680393300": {
                    v: number[];
                    c: number[];
                };
                "1680393900": {
                    v: number[];
                    c: number[];
                };
                "1680394800": {
                    v: number[];
                    c: number[];
                };
                "1680395700": {
                    v: number[];
                    c: number[];
                };
                "1680396600": {
                    v: number[];
                    c: number[];
                };
                "1680397500": {
                    v: number[];
                    c: number[];
                };
                "1680398400": {
                    v: number[];
                    c: number[];
                };
                "1680399300": {
                    v: number[];
                    c: number[];
                };
                "1680400200": {
                    v: number[];
                    c: number[];
                };
                "1680400800": {
                    v: number[];
                    c: number[];
                };
                "1680401700": {
                    v: number[];
                    c: number[];
                };
                "1680402600": {
                    v: number[];
                    c: number[];
                };
                "1680403500": {
                    v: number[];
                    c: number[];
                };
                "1680404400": {
                    v: number[];
                    c: number[];
                };
                "1680405300": {
                    v: number[];
                    c: number[];
                };
                "1680406200": {
                    v: number[];
                    c: number[];
                };
                "1680407100": {
                    v: number[];
                    c: number[];
                };
                "1680407700": {
                    v: number[];
                    c: number[];
                };
                "1680408600": {
                    v: number[];
                    c: number[];
                };
                "1680409500": {
                    v: number[];
                    c: number[];
                };
                "1680410400": {
                    v: number[];
                    c: number[];
                };
                "1680411300": {
                    v: number[];
                    c: number[];
                };
                "1680412200": {
                    v: number[];
                    c: number[];
                };
                "1680413100": {
                    v: number[];
                    c: number[];
                };
                "1680414000": {
                    v: number[];
                    c: number[];
                };
                "1680414600": {
                    v: number[];
                    c: number[];
                };
                "1680415500": {
                    v: number[];
                    c: number[];
                };
                "1680416400": {
                    v: number[];
                    c: number[];
                };
                "1680417300": {
                    v: number[];
                    c: number[];
                };
                "1680418200": {
                    v: number[];
                    c: number[];
                };
                "1680419100": {
                    v: number[];
                    c: number[];
                };
                "1680420000": {
                    v: number[];
                    c: number[];
                };
                "1680420900": {
                    v: number[];
                    c: number[];
                };
                "1680421500": {
                    v: number[];
                    c: number[];
                };
                "1680422400": {
                    v: number[];
                    c: number[];
                };
                "1680423300": {
                    v: number[];
                    c: number[];
                };
                "1680424200": {
                    v: number[];
                    c: number[];
                };
                "1680425100": {
                    v: number[];
                    c: number[];
                };
                "1680426000": {
                    v: number[];
                    c: number[];
                };
                "1680426900": {
                    v: number[];
                    c: number[];
                };
                "1680427800": {
                    v: number[];
                    c: number[];
                };
                "1680428700": {
                    v: number[];
                    c: number[];
                };
                "1680429300": {
                    v: number[];
                    c: number[];
                };
                "1680430200": {
                    v: number[];
                    c: number[];
                };
                "1680431100": {
                    v: number[];
                    c: number[];
                };
                "1680432000": {
                    v: number[];
                    c: number[];
                };
                "1680432900": {
                    v: number[];
                    c: number[];
                };
                "1680433800": {
                    v: number[];
                    c: number[];
                };
                "1680434700": {
                    v: number[];
                    c: number[];
                };
                "1680435600": {
                    v: number[];
                    c: number[];
                };
                "1680436200": {
                    v: number[];
                    c: number[];
                };
                "1680437100": {
                    v: number[];
                    c: number[];
                };
                "1680438000": {
                    v: number[];
                    c: number[];
                };
                "1680438900": {
                    v: number[];
                    c: number[];
                };
                "1680439800": {
                    v: number[];
                    c: number[];
                };
                "1680440700": {
                    v: number[];
                    c: number[];
                };
                "1680441600": {
                    v: number[];
                    c: number[];
                };
                "1680442500": {
                    v: number[];
                    c: number[];
                };
                "1680443100": {
                    v: number[];
                    c: number[];
                };
                "1680444000": {
                    v: number[];
                    c: number[];
                };
                "1680444900": {
                    v: number[];
                    c: number[];
                };
                "1680445800": {
                    v: number[];
                    c: number[];
                };
                "1680446700": {
                    v: number[];
                    c: number[];
                };
                "1680447600": {
                    v: number[];
                    c: number[];
                };
                "1680448500": {
                    v: number[];
                    c: number[];
                };
                "1680449400": {
                    v: number[];
                    c: number[];
                };
                "1680450000": {
                    v: number[];
                    c: number[];
                };
                "1680450900": {
                    v: number[];
                    c: number[];
                };
                "1680451800": {
                    v: number[];
                    c: number[];
                };
                "1680452700": {
                    v: number[];
                    c: number[];
                };
                "1680453600": {
                    v: number[];
                    c: number[];
                };
                "1680454500": {
                    v: number[];
                    c: number[];
                };
                "1680455400": {
                    v: number[];
                    c: number[];
                };
                "1680456300": {
                    v: number[];
                    c: number[];
                };
                "1680456900": {
                    v: number[];
                    c: number[];
                };
                "1680457800": {
                    v: number[];
                    c: number[];
                };
                "1680458700": {
                    v: number[];
                    c: number[];
                };
                "1680459600": {
                    v: number[];
                    c: number[];
                };
                "1680460500": {
                    v: number[];
                    c: number[];
                };
                "1680461400": {
                    v: number[];
                    c: number[];
                };
                "1680462300": {
                    v: number[];
                    c: number[];
                };
                "1680463200": {
                    v: number[];
                    c: number[];
                };
                "1680463800": {
                    v: number[];
                    c: number[];
                };
                "1680464700": {
                    v: number[];
                    c: number[];
                };
                "1680465600": {
                    v: number[];
                    c: number[];
                };
                "1680466500": {
                    v: number[];
                    c: number[];
                };
                "1680467400": {
                    v: number[];
                    c: number[];
                };
                "1680468300": {
                    v: number[];
                    c: number[];
                };
                "1680469200": {
                    v: number[];
                    c: number[];
                };
                "1680470100": {
                    v: number[];
                    c: number[];
                };
                "1680470700": {
                    v: number[];
                    c: number[];
                };
                "1680471600": {
                    v: number[];
                    c: number[];
                };
                "1680472500": {
                    v: number[];
                    c: number[];
                };
                "1680473400": {
                    v: number[];
                    c: number[];
                };
                "1680474300": {
                    v: number[];
                    c: number[];
                };
                "1680475200": {
                    v: number[];
                    c: number[];
                };
                "1680476100": {
                    v: number[];
                    c: number[];
                };
                "1680477000": {
                    v: number[];
                    c: number[];
                };
                "1680477600": {
                    v: number[];
                    c: number[];
                };
                "1680478500": {
                    v: number[];
                    c: number[];
                };
                "1680479400": {
                    v: number[];
                    c: number[];
                };
                "1680480300": {
                    v: number[];
                    c: number[];
                };
                "1680481200": {
                    v: number[];
                    c: number[];
                };
                "1680482100": {
                    v: number[];
                    c: number[];
                };
                "1680483000": {
                    v: number[];
                    c: number[];
                };
                "1680483900": {
                    v: number[];
                    c: number[];
                };
                "1680484500": {
                    v: number[];
                    c: number[];
                };
                "1680485400": {
                    v: number[];
                    c: number[];
                };
                "1680486300": {
                    v: number[];
                    c: number[];
                };
                "1680487200": {
                    v: number[];
                    c: number[];
                };
                "1680488100": {
                    v: number[];
                    c: number[];
                };
                "1680489000": {
                    v: number[];
                    c: number[];
                };
                "1680489900": {
                    v: number[];
                    c: number[];
                };
                "1680490800": {
                    v: number[];
                    c: number[];
                };
                "1680491400": {
                    v: number[];
                    c: number[];
                };
                "1680492300": {
                    v: number[];
                    c: number[];
                };
                "1680493200": {
                    v: number[];
                    c: number[];
                };
                "1680494100": {
                    v: number[];
                    c: number[];
                };
                "1680495000": {
                    v: number[];
                    c: number[];
                };
                "1680495900": {
                    v: number[];
                    c: number[];
                };
                "1680496800": {
                    v: number[];
                    c: number[];
                };
                "1680497700": {
                    v: number[];
                    c: number[];
                };
                "1680498600": {
                    v: number[];
                    c: number[];
                };
                "1680499200": {
                    v: number[];
                    c: number[];
                };
                "1680500100": {
                    v: number[];
                    c: number[];
                };
                "1680501000": {
                    v: number[];
                    c: number[];
                };
                "1680501900": {
                    v: number[];
                    c: number[];
                };
                "1680502800": {
                    v: number[];
                    c: number[];
                };
                "1680503700": {
                    v: number[];
                    c: number[];
                };
                "1680504600": {
                    v: number[];
                    c: number[];
                };
                "1680505500": {
                    v: number[];
                    c: number[];
                };
                "1680506100": {
                    v: number[];
                    c: number[];
                };
                "1680507000": {
                    v: number[];
                    c: number[];
                };
                "1680507900": {
                    v: number[];
                    c: number[];
                };
                "1680508800": {
                    v: number[];
                    c: number[];
                };
                "1680509700": {
                    v: number[];
                    c: number[];
                };
                "1680510600": {
                    v: number[];
                    c: number[];
                };
                "1680511500": {
                    v: number[];
                    c: number[];
                };
                "1680512400": {
                    v: number[];
                    c: number[];
                };
                "1680513000": {
                    v: number[];
                    c: number[];
                };
                "1680513900": {
                    v: number[];
                    c: number[];
                };
                "1680514800": {
                    v: number[];
                    c: number[];
                };
                "1680515700": {
                    v: number[];
                    c: number[];
                };
                "1680516600": {
                    v: number[];
                    c: number[];
                };
                "1680517500": {
                    v: number[];
                    c: number[];
                };
                "1680518400": {
                    v: number[];
                    c: number[];
                };
                "1680519300": {
                    v: number[];
                    c: number[];
                };
                "1680519900": {
                    v: number[];
                    c: number[];
                };
                "1680520800": {
                    v: number[];
                    c: number[];
                };
                "1680521700": {
                    v: number[];
                    c: number[];
                };
                "1680522600": {
                    v: number[];
                    c: number[];
                };
                "1680523500": {
                    v: number[];
                    c: number[];
                };
                "1680524400": {
                    v: number[];
                    c: number[];
                };
                "1680525300": {
                    v: number[];
                    c: number[];
                };
                "1680526200": {
                    v: number[];
                    c: number[];
                };
                "1680526800": {
                    v: number[];
                    c: number[];
                };
                "1680527700": {
                    v: number[];
                    c: number[];
                };
                "1680528600": {
                    v: number[];
                    c: number[];
                };
                "1680529500": {
                    v: number[];
                    c: number[];
                };
                "1680530400": {
                    v: number[];
                    c: number[];
                };
                "1680531300": {
                    v: number[];
                    c: number[];
                };
                "1680532200": {
                    v: number[];
                    c: number[];
                };
                "1680533100": {
                    v: number[];
                    c: number[];
                };
                "1680533700": {
                    v: number[];
                    c: number[];
                };
                "1680534600": {
                    v: number[];
                    c: number[];
                };
                "1680535500": {
                    v: number[];
                    c: number[];
                };
                "1680536400": {
                    v: number[];
                    c: number[];
                };
                "1680537300": {
                    v: number[];
                    c: number[];
                };
                "1680538200": {
                    v: number[];
                    c: number[];
                };
                "1680539100": {
                    v: number[];
                    c: number[];
                };
                "1680540000": {
                    v: number[];
                    c: number[];
                };
                "1680540600": {
                    v: number[];
                    c: number[];
                };
                "1680541500": {
                    v: number[];
                    c: number[];
                };
                "1680542400": {
                    v: number[];
                    c: number[];
                };
                "1680543300": {
                    v: number[];
                    c: number[];
                };
                "1680544200": {
                    v: number[];
                    c: number[];
                };
                "1680545100": {
                    v: number[];
                    c: number[];
                };
                "1680546000": {
                    v: number[];
                    c: number[];
                };
                "1680546900": {
                    v: number[];
                    c: number[];
                };
                "1680547500": {
                    v: number[];
                    c: number[];
                };
                "1680548400": {
                    v: number[];
                    c: number[];
                };
                "1680549300": {
                    v: number[];
                    c: number[];
                };
                "1680550200": {
                    v: number[];
                    c: number[];
                };
                "1680551100": {
                    v: number[];
                    c: number[];
                };
                "1680552000": {
                    v: number[];
                    c: number[];
                };
                "1680552900": {
                    v: number[];
                    c: number[];
                };
                "1680553800": {
                    v: number[];
                    c: number[];
                };
                "1680554400": {
                    v: number[];
                    c: number[];
                };
                "1680555300": {
                    v: number[];
                    c: number[];
                };
                "1680556200": {
                    v: number[];
                    c: number[];
                };
                "1680557100": {
                    v: number[];
                    c: number[];
                };
                "1680558000": {
                    v: number[];
                    c: number[];
                };
                "1680558900": {
                    v: number[];
                    c: number[];
                };
                "1680559800": {
                    v: number[];
                    c: number[];
                };
                "1680560700": {
                    v: number[];
                    c: number[];
                };
                "1680561600": {
                    v: number[];
                    c: number[];
                };
                "1680562200": {
                    v: number[];
                    c: number[];
                };
                "1680563100": {
                    v: number[];
                    c: number[];
                };
                "1680564000": {
                    v: number[];
                    c: number[];
                };
                "1680564900": {
                    v: number[];
                    c: number[];
                };
                "1680565800": {
                    v: number[];
                    c: number[];
                };
                "1680566700": {
                    v: number[];
                    c: number[];
                };
                "1680567600": {
                    v: number[];
                    c: number[];
                };
                "1680568500": {
                    v: number[];
                    c: number[];
                };
                "1680569100": {
                    v: number[];
                    c: number[];
                };
                "1680570000": {
                    v: number[];
                    c: number[];
                };
                "1680570900": {
                    v: number[];
                    c: number[];
                };
                "1680571800": {
                    v: number[];
                    c: number[];
                };
                "1680572700": {
                    v: number[];
                    c: number[];
                };
                "1680574500": {
                    v: number[];
                    c: number[];
                };
                "1680576900": {
                    v: number[];
                    c: number[];
                };
                "1680578400": {
                    v: number[];
                };
            };
        };
        status: {
            timestamp: string;
            error_code: string;
            error_message: string;
            elapsed: string;
            credit_count: number;
        };
    };
}
/// <amd-module name="@scom/scom-trading-chart/store/dummy/month.json.ts" />
declare module "@scom/scom-trading-chart/store/dummy/month.json.ts" {
    export const month: {
        data: {
            points: {
                "1677988800": {
                    v: number[];
                    c: number[];
                };
                "1677996000": {
                    v: number[];
                    c: number[];
                };
                "1677999600": {
                    v: number[];
                    c: number[];
                };
                "1678003200": {
                    v: number[];
                    c: number[];
                };
                "1678006800": {
                    v: number[];
                    c: number[];
                };
                "1678010400": {
                    v: number[];
                    c: number[];
                };
                "1678014000": {
                    v: number[];
                    c: number[];
                };
                "1678017600": {
                    v: number[];
                    c: number[];
                };
                "1678021200": {
                    v: number[];
                    c: number[];
                };
                "1678024800": {
                    v: number[];
                    c: number[];
                };
                "1678028400": {
                    v: number[];
                    c: number[];
                };
                "1678032000": {
                    v: number[];
                    c: number[];
                };
                "1678035600": {
                    v: number[];
                    c: number[];
                };
                "1678039200": {
                    v: number[];
                    c: number[];
                };
                "1678042800": {
                    v: number[];
                    c: number[];
                };
                "1678046400": {
                    v: number[];
                    c: number[];
                };
                "1678050000": {
                    v: number[];
                    c: number[];
                };
                "1678053600": {
                    v: number[];
                    c: number[];
                };
                "1678057200": {
                    v: number[];
                    c: number[];
                };
                "1678060800": {
                    v: number[];
                    c: number[];
                };
                "1678064400": {
                    v: number[];
                    c: number[];
                };
                "1678068000": {
                    v: number[];
                    c: number[];
                };
                "1678071600": {
                    v: number[];
                    c: number[];
                };
                "1678075200": {
                    v: number[];
                    c: number[];
                };
                "1678078800": {
                    v: number[];
                    c: number[];
                };
                "1678082400": {
                    v: number[];
                    c: number[];
                };
                "1678086000": {
                    v: number[];
                    c: number[];
                };
                "1678089600": {
                    v: number[];
                    c: number[];
                };
                "1678093200": {
                    v: number[];
                    c: number[];
                };
                "1678096800": {
                    v: number[];
                    c: number[];
                };
                "1678100400": {
                    v: number[];
                    c: number[];
                };
                "1678104000": {
                    v: number[];
                    c: number[];
                };
                "1678107600": {
                    v: number[];
                    c: number[];
                };
                "1678111200": {
                    v: number[];
                    c: number[];
                };
                "1678114800": {
                    v: number[];
                    c: number[];
                };
                "1678118400": {
                    v: number[];
                    c: number[];
                };
                "1678122000": {
                    v: number[];
                    c: number[];
                };
                "1678125600": {
                    v: number[];
                    c: number[];
                };
                "1678132800": {
                    v: number[];
                    c: number[];
                };
                "1678136400": {
                    v: number[];
                    c: number[];
                };
                "1678140000": {
                    v: number[];
                    c: number[];
                };
                "1678143600": {
                    v: number[];
                    c: number[];
                };
                "1678147200": {
                    v: number[];
                    c: number[];
                };
                "1678150800": {
                    v: number[];
                    c: number[];
                };
                "1678154400": {
                    v: number[];
                    c: number[];
                };
                "1678158000": {
                    v: number[];
                    c: number[];
                };
                "1678161600": {
                    v: number[];
                    c: number[];
                };
                "1678165200": {
                    v: number[];
                    c: number[];
                };
                "1678168800": {
                    v: number[];
                    c: number[];
                };
                "1678172400": {
                    v: number[];
                    c: number[];
                };
                "1678176000": {
                    v: number[];
                    c: number[];
                };
                "1678179600": {
                    v: number[];
                    c: number[];
                };
                "1678183200": {
                    v: number[];
                    c: number[];
                };
                "1678186800": {
                    v: number[];
                    c: number[];
                };
                "1678190400": {
                    v: number[];
                    c: number[];
                };
                "1678194000": {
                    v: number[];
                    c: number[];
                };
                "1678197600": {
                    v: number[];
                    c: number[];
                };
                "1678201200": {
                    v: number[];
                    c: number[];
                };
                "1678204800": {
                    v: number[];
                    c: number[];
                };
                "1678208400": {
                    v: number[];
                    c: number[];
                };
                "1678212000": {
                    v: number[];
                    c: number[];
                };
                "1678215600": {
                    v: number[];
                    c: number[];
                };
                "1678219200": {
                    v: number[];
                    c: number[];
                };
                "1678222800": {
                    v: number[];
                    c: number[];
                };
                "1678226400": {
                    v: number[];
                    c: number[];
                };
                "1678230000": {
                    v: number[];
                    c: number[];
                };
                "1678233600": {
                    v: number[];
                    c: number[];
                };
                "1678237200": {
                    v: number[];
                    c: number[];
                };
                "1678240800": {
                    v: number[];
                    c: number[];
                };
                "1678244400": {
                    v: number[];
                    c: number[];
                };
                "1678248000": {
                    v: number[];
                    c: number[];
                };
                "1678251600": {
                    v: number[];
                    c: number[];
                };
                "1678255200": {
                    v: number[];
                    c: number[];
                };
                "1678258800": {
                    v: number[];
                    c: number[];
                };
                "1678262400": {
                    v: number[];
                    c: number[];
                };
                "1678269600": {
                    v: number[];
                    c: number[];
                };
                "1678273200": {
                    v: number[];
                    c: number[];
                };
                "1678276800": {
                    v: number[];
                    c: number[];
                };
                "1678280400": {
                    v: number[];
                    c: number[];
                };
                "1678284000": {
                    v: number[];
                    c: number[];
                };
                "1678287600": {
                    v: number[];
                    c: number[];
                };
                "1678291200": {
                    v: number[];
                    c: number[];
                };
                "1678294800": {
                    v: number[];
                    c: number[];
                };
                "1678298400": {
                    v: number[];
                    c: number[];
                };
                "1678302000": {
                    v: number[];
                    c: number[];
                };
                "1678305600": {
                    v: number[];
                    c: number[];
                };
                "1678309200": {
                    v: number[];
                    c: number[];
                };
                "1678312800": {
                    v: number[];
                    c: number[];
                };
                "1678316400": {
                    v: number[];
                    c: number[];
                };
                "1678320000": {
                    v: number[];
                    c: number[];
                };
                "1678323600": {
                    v: number[];
                    c: number[];
                };
                "1678327200": {
                    v: number[];
                    c: number[];
                };
                "1678330800": {
                    v: number[];
                    c: number[];
                };
                "1678334400": {
                    v: number[];
                    c: number[];
                };
                "1678338000": {
                    v: number[];
                    c: number[];
                };
                "1678341600": {
                    v: number[];
                    c: number[];
                };
                "1678345200": {
                    v: number[];
                    c: number[];
                };
                "1678348800": {
                    v: number[];
                    c: number[];
                };
                "1678352400": {
                    v: number[];
                    c: number[];
                };
                "1678356000": {
                    v: number[];
                    c: number[];
                };
                "1678359600": {
                    v: number[];
                    c: number[];
                };
                "1678363200": {
                    v: number[];
                    c: number[];
                };
                "1678366800": {
                    v: number[];
                    c: number[];
                };
                "1678370400": {
                    v: number[];
                    c: number[];
                };
                "1678374000": {
                    v: number[];
                    c: number[];
                };
                "1678377600": {
                    v: number[];
                    c: number[];
                };
                "1678381200": {
                    v: number[];
                    c: number[];
                };
                "1678384800": {
                    v: number[];
                    c: number[];
                };
                "1678388400": {
                    v: number[];
                    c: number[];
                };
                "1678392000": {
                    v: number[];
                    c: number[];
                };
                "1678395600": {
                    v: number[];
                    c: number[];
                };
                "1678399200": {
                    v: number[];
                    c: number[];
                };
                "1678406400": {
                    v: number[];
                    c: number[];
                };
                "1678410000": {
                    v: number[];
                    c: number[];
                };
                "1678413600": {
                    v: number[];
                    c: number[];
                };
                "1678417200": {
                    v: number[];
                    c: number[];
                };
                "1678420800": {
                    v: number[];
                    c: number[];
                };
                "1678424400": {
                    v: number[];
                    c: number[];
                };
                "1678428000": {
                    v: number[];
                    c: number[];
                };
                "1678431600": {
                    v: number[];
                    c: number[];
                };
                "1678435200": {
                    v: number[];
                    c: number[];
                };
                "1678438800": {
                    v: number[];
                    c: number[];
                };
                "1678442400": {
                    v: number[];
                    c: number[];
                };
                "1678446000": {
                    v: number[];
                    c: number[];
                };
                "1678449600": {
                    v: number[];
                    c: number[];
                };
                "1678453200": {
                    v: number[];
                    c: number[];
                };
                "1678456800": {
                    v: number[];
                    c: number[];
                };
                "1678460400": {
                    v: number[];
                    c: number[];
                };
                "1678464000": {
                    v: number[];
                    c: number[];
                };
                "1678467600": {
                    v: number[];
                    c: number[];
                };
                "1678471200": {
                    v: number[];
                    c: number[];
                };
                "1678474800": {
                    v: number[];
                    c: number[];
                };
                "1678478400": {
                    v: number[];
                    c: number[];
                };
                "1678482000": {
                    v: number[];
                    c: number[];
                };
                "1678485600": {
                    v: number[];
                    c: number[];
                };
                "1678489200": {
                    v: number[];
                    c: number[];
                };
                "1678492800": {
                    v: number[];
                    c: number[];
                };
                "1678496400": {
                    v: number[];
                    c: number[];
                };
                "1678500000": {
                    v: number[];
                    c: number[];
                };
                "1678503600": {
                    v: number[];
                    c: number[];
                };
                "1678507200": {
                    v: number[];
                    c: number[];
                };
                "1678510800": {
                    v: number[];
                    c: number[];
                };
                "1678514400": {
                    v: number[];
                    c: number[];
                };
                "1678518000": {
                    v: number[];
                    c: number[];
                };
                "1678521600": {
                    v: number[];
                    c: number[];
                };
                "1678525200": {
                    v: number[];
                    c: number[];
                };
                "1678528800": {
                    v: number[];
                    c: number[];
                };
                "1678532400": {
                    v: number[];
                    c: number[];
                };
                "1678536000": {
                    v: number[];
                    c: number[];
                };
                "1678543200": {
                    v: number[];
                    c: number[];
                };
                "1678546800": {
                    v: number[];
                    c: number[];
                };
                "1678550400": {
                    v: number[];
                    c: number[];
                };
                "1678554000": {
                    v: number[];
                    c: number[];
                };
                "1678557600": {
                    v: number[];
                    c: number[];
                };
                "1678561200": {
                    v: number[];
                    c: number[];
                };
                "1678564800": {
                    v: number[];
                    c: number[];
                };
                "1678568400": {
                    v: number[];
                    c: number[];
                };
                "1678572000": {
                    v: number[];
                    c: number[];
                };
                "1678575600": {
                    v: number[];
                    c: number[];
                };
                "1678579200": {
                    v: number[];
                    c: number[];
                };
                "1678582800": {
                    v: number[];
                    c: number[];
                };
                "1678586400": {
                    v: number[];
                    c: number[];
                };
                "1678590000": {
                    v: number[];
                    c: number[];
                };
                "1678593600": {
                    v: number[];
                    c: number[];
                };
                "1678597200": {
                    v: number[];
                    c: number[];
                };
                "1678600800": {
                    v: number[];
                    c: number[];
                };
                "1678604400": {
                    v: number[];
                    c: number[];
                };
                "1678608000": {
                    v: number[];
                    c: number[];
                };
                "1678611600": {
                    v: number[];
                    c: number[];
                };
                "1678615200": {
                    v: number[];
                    c: number[];
                };
                "1678618800": {
                    v: number[];
                    c: number[];
                };
                "1678622400": {
                    v: number[];
                    c: number[];
                };
                "1678626000": {
                    v: number[];
                    c: number[];
                };
                "1678629600": {
                    v: number[];
                    c: number[];
                };
                "1678633200": {
                    v: number[];
                    c: number[];
                };
                "1678636800": {
                    v: number[];
                    c: number[];
                };
                "1678640400": {
                    v: number[];
                    c: number[];
                };
                "1678644000": {
                    v: number[];
                    c: number[];
                };
                "1678647600": {
                    v: number[];
                    c: number[];
                };
                "1678651200": {
                    v: number[];
                    c: number[];
                };
                "1678654800": {
                    v: number[];
                    c: number[];
                };
                "1678658400": {
                    v: number[];
                    c: number[];
                };
                "1678662000": {
                    v: number[];
                    c: number[];
                };
                "1678665600": {
                    v: number[];
                    c: number[];
                };
                "1678669200": {
                    v: number[];
                    c: number[];
                };
                "1678672800": {
                    v: number[];
                    c: number[];
                };
                "1678680000": {
                    v: number[];
                    c: number[];
                };
                "1678683600": {
                    v: number[];
                    c: number[];
                };
                "1678687200": {
                    v: number[];
                    c: number[];
                };
                "1678690800": {
                    v: number[];
                    c: number[];
                };
                "1678694400": {
                    v: number[];
                    c: number[];
                };
                "1678698000": {
                    v: number[];
                    c: number[];
                };
                "1678701600": {
                    v: number[];
                    c: number[];
                };
                "1678705200": {
                    v: number[];
                    c: number[];
                };
                "1678708800": {
                    v: number[];
                    c: number[];
                };
                "1678712400": {
                    v: number[];
                    c: number[];
                };
                "1678716000": {
                    v: number[];
                    c: number[];
                };
                "1678719600": {
                    v: number[];
                    c: number[];
                };
                "1678723200": {
                    v: number[];
                    c: number[];
                };
                "1678726800": {
                    v: number[];
                    c: number[];
                };
                "1678730400": {
                    v: number[];
                    c: number[];
                };
                "1678734000": {
                    v: number[];
                    c: number[];
                };
                "1678737600": {
                    v: number[];
                    c: number[];
                };
                "1678741200": {
                    v: number[];
                    c: number[];
                };
                "1678744800": {
                    v: number[];
                    c: number[];
                };
                "1678748400": {
                    v: number[];
                    c: number[];
                };
                "1678752000": {
                    v: number[];
                    c: number[];
                };
                "1678755600": {
                    v: number[];
                    c: number[];
                };
                "1678759200": {
                    v: number[];
                    c: number[];
                };
                "1678762800": {
                    v: number[];
                    c: number[];
                };
                "1678766400": {
                    v: number[];
                    c: number[];
                };
                "1678770000": {
                    v: number[];
                    c: number[];
                };
                "1678773600": {
                    v: number[];
                    c: number[];
                };
                "1678777200": {
                    v: number[];
                    c: number[];
                };
                "1678780800": {
                    v: number[];
                    c: number[];
                };
                "1678784400": {
                    v: number[];
                    c: number[];
                };
                "1678788000": {
                    v: number[];
                    c: number[];
                };
                "1678791600": {
                    v: number[];
                    c: number[];
                };
                "1678795200": {
                    v: number[];
                    c: number[];
                };
                "1678798800": {
                    v: number[];
                    c: number[];
                };
                "1678802400": {
                    v: number[];
                    c: number[];
                };
                "1678806000": {
                    v: number[];
                    c: number[];
                };
                "1678809600": {
                    v: number[];
                    c: number[];
                };
                "1678816800": {
                    v: number[];
                    c: number[];
                };
                "1678820400": {
                    v: number[];
                    c: number[];
                };
                "1678824000": {
                    v: number[];
                    c: number[];
                };
                "1678827600": {
                    v: number[];
                    c: number[];
                };
                "1678831200": {
                    v: number[];
                    c: number[];
                };
                "1678834800": {
                    v: number[];
                    c: number[];
                };
                "1678838400": {
                    v: number[];
                    c: number[];
                };
                "1678842000": {
                    v: number[];
                    c: number[];
                };
                "1678845600": {
                    v: number[];
                    c: number[];
                };
                "1678849200": {
                    v: number[];
                    c: number[];
                };
                "1678852800": {
                    v: number[];
                    c: number[];
                };
                "1678856400": {
                    v: number[];
                    c: number[];
                };
                "1678860000": {
                    v: number[];
                    c: number[];
                };
                "1678863600": {
                    v: number[];
                    c: number[];
                };
                "1678867200": {
                    v: number[];
                    c: number[];
                };
                "1678870800": {
                    v: number[];
                    c: number[];
                };
                "1678874400": {
                    v: number[];
                    c: number[];
                };
                "1678878000": {
                    v: number[];
                    c: number[];
                };
                "1678881600": {
                    v: number[];
                    c: number[];
                };
                "1678885200": {
                    v: number[];
                    c: number[];
                };
                "1678888800": {
                    v: number[];
                    c: number[];
                };
                "1678892400": {
                    v: number[];
                    c: number[];
                };
                "1678896000": {
                    v: number[];
                    c: number[];
                };
                "1678899600": {
                    v: number[];
                    c: number[];
                };
                "1678903200": {
                    v: number[];
                    c: number[];
                };
                "1678906800": {
                    v: number[];
                    c: number[];
                };
                "1678910400": {
                    v: number[];
                    c: number[];
                };
                "1678914000": {
                    v: number[];
                    c: number[];
                };
                "1678917600": {
                    v: number[];
                    c: number[];
                };
                "1678921200": {
                    v: number[];
                    c: number[];
                };
                "1678924800": {
                    v: number[];
                    c: number[];
                };
                "1678928400": {
                    v: number[];
                    c: number[];
                };
                "1678932000": {
                    v: number[];
                    c: number[];
                };
                "1678935600": {
                    v: number[];
                    c: number[];
                };
                "1678939200": {
                    v: number[];
                    c: number[];
                };
                "1678942800": {
                    v: number[];
                    c: number[];
                };
                "1678946400": {
                    v: number[];
                    c: number[];
                };
                "1678953600": {
                    v: number[];
                    c: number[];
                };
                "1678957200": {
                    v: number[];
                    c: number[];
                };
                "1678960800": {
                    v: number[];
                    c: number[];
                };
                "1678964400": {
                    v: number[];
                    c: number[];
                };
                "1678968000": {
                    v: number[];
                    c: number[];
                };
                "1678971600": {
                    v: number[];
                    c: number[];
                };
                "1678975200": {
                    v: number[];
                    c: number[];
                };
                "1678978800": {
                    v: number[];
                    c: number[];
                };
                "1678982400": {
                    v: number[];
                    c: number[];
                };
                "1678986000": {
                    v: number[];
                    c: number[];
                };
                "1678989600": {
                    v: number[];
                    c: number[];
                };
                "1678993200": {
                    v: number[];
                    c: number[];
                };
                "1678996800": {
                    v: number[];
                    c: number[];
                };
                "1679000400": {
                    v: number[];
                    c: number[];
                };
                "1679004000": {
                    v: number[];
                    c: number[];
                };
                "1679007600": {
                    v: number[];
                    c: number[];
                };
                "1679011200": {
                    v: number[];
                    c: number[];
                };
                "1679014800": {
                    v: number[];
                    c: number[];
                };
                "1679018400": {
                    v: number[];
                    c: number[];
                };
                "1679022000": {
                    v: number[];
                    c: number[];
                };
                "1679025600": {
                    v: number[];
                    c: number[];
                };
                "1679029200": {
                    v: number[];
                    c: number[];
                };
                "1679032800": {
                    v: number[];
                    c: number[];
                };
                "1679036400": {
                    v: number[];
                    c: number[];
                };
                "1679040000": {
                    v: number[];
                    c: number[];
                };
                "1679043600": {
                    v: number[];
                    c: number[];
                };
                "1679047200": {
                    v: number[];
                    c: number[];
                };
                "1679050800": {
                    v: number[];
                    c: number[];
                };
                "1679054400": {
                    v: number[];
                    c: number[];
                };
                "1679058000": {
                    v: number[];
                    c: number[];
                };
                "1679061600": {
                    v: number[];
                    c: number[];
                };
                "1679065200": {
                    v: number[];
                    c: number[];
                };
                "1679068800": {
                    v: number[];
                    c: number[];
                };
                "1679072400": {
                    v: number[];
                    c: number[];
                };
                "1679076000": {
                    v: number[];
                    c: number[];
                };
                "1679079600": {
                    v: number[];
                    c: number[];
                };
                "1679083200": {
                    v: number[];
                    c: number[];
                };
                "1679090400": {
                    v: number[];
                    c: number[];
                };
                "1679094000": {
                    v: number[];
                    c: number[];
                };
                "1679097600": {
                    v: number[];
                    c: number[];
                };
                "1679101200": {
                    v: number[];
                    c: number[];
                };
                "1679104800": {
                    v: number[];
                    c: number[];
                };
                "1679108400": {
                    v: number[];
                    c: number[];
                };
                "1679112000": {
                    v: number[];
                    c: number[];
                };
                "1679115600": {
                    v: number[];
                    c: number[];
                };
                "1679119200": {
                    v: number[];
                    c: number[];
                };
                "1679122800": {
                    v: number[];
                    c: number[];
                };
                "1679126400": {
                    v: number[];
                    c: number[];
                };
                "1679130000": {
                    v: number[];
                    c: number[];
                };
                "1679133600": {
                    v: number[];
                    c: number[];
                };
                "1679137200": {
                    v: number[];
                    c: number[];
                };
                "1679140800": {
                    v: number[];
                    c: number[];
                };
                "1679144400": {
                    v: number[];
                    c: number[];
                };
                "1679148000": {
                    v: number[];
                    c: number[];
                };
                "1679151600": {
                    v: number[];
                    c: number[];
                };
                "1679155200": {
                    v: number[];
                    c: number[];
                };
                "1679158800": {
                    v: number[];
                    c: number[];
                };
                "1679162400": {
                    v: number[];
                    c: number[];
                };
                "1679166000": {
                    v: number[];
                    c: number[];
                };
                "1679169600": {
                    v: number[];
                    c: number[];
                };
                "1679173200": {
                    v: number[];
                    c: number[];
                };
                "1679176800": {
                    v: number[];
                    c: number[];
                };
                "1679180400": {
                    v: number[];
                    c: number[];
                };
                "1679184000": {
                    v: number[];
                    c: number[];
                };
                "1679187600": {
                    v: number[];
                    c: number[];
                };
                "1679191200": {
                    v: number[];
                    c: number[];
                };
                "1679194800": {
                    v: number[];
                    c: number[];
                };
                "1679198400": {
                    v: number[];
                    c: number[];
                };
                "1679202000": {
                    v: number[];
                    c: number[];
                };
                "1679205600": {
                    v: number[];
                    c: number[];
                };
                "1679209200": {
                    v: number[];
                    c: number[];
                };
                "1679212800": {
                    v: number[];
                    c: number[];
                };
                "1679216400": {
                    v: number[];
                    c: number[];
                };
                "1679220000": {
                    v: number[];
                    c: number[];
                };
                "1679223600": {
                    v: number[];
                    c: number[];
                };
                "1679230800": {
                    v: number[];
                    c: number[];
                };
                "1679234400": {
                    v: number[];
                    c: number[];
                };
                "1679238000": {
                    v: number[];
                    c: number[];
                };
                "1679241600": {
                    v: number[];
                    c: number[];
                };
                "1679245200": {
                    v: number[];
                    c: number[];
                };
                "1679248800": {
                    v: number[];
                    c: number[];
                };
                "1679252400": {
                    v: number[];
                    c: number[];
                };
                "1679256000": {
                    v: number[];
                    c: number[];
                };
                "1679259600": {
                    v: number[];
                    c: number[];
                };
                "1679263200": {
                    v: number[];
                    c: number[];
                };
                "1679266800": {
                    v: number[];
                    c: number[];
                };
                "1679270400": {
                    v: number[];
                    c: number[];
                };
                "1679274000": {
                    v: number[];
                    c: number[];
                };
                "1679277600": {
                    v: number[];
                    c: number[];
                };
                "1679281200": {
                    v: number[];
                    c: number[];
                };
                "1679284800": {
                    v: number[];
                    c: number[];
                };
                "1679288400": {
                    v: number[];
                    c: number[];
                };
                "1679292000": {
                    v: number[];
                    c: number[];
                };
                "1679295600": {
                    v: number[];
                    c: number[];
                };
                "1679299200": {
                    v: number[];
                    c: number[];
                };
                "1679302800": {
                    v: number[];
                    c: number[];
                };
                "1679306400": {
                    v: number[];
                    c: number[];
                };
                "1679310000": {
                    v: number[];
                    c: number[];
                };
                "1679313600": {
                    v: number[];
                    c: number[];
                };
                "1679317200": {
                    v: number[];
                    c: number[];
                };
                "1679320800": {
                    v: number[];
                    c: number[];
                };
                "1679324400": {
                    v: number[];
                    c: number[];
                };
                "1679328000": {
                    v: number[];
                    c: number[];
                };
                "1679331600": {
                    v: number[];
                    c: number[];
                };
                "1679335200": {
                    v: number[];
                    c: number[];
                };
                "1679338800": {
                    v: number[];
                    c: number[];
                };
                "1679342400": {
                    v: number[];
                    c: number[];
                };
                "1679346000": {
                    v: number[];
                    c: number[];
                };
                "1679349600": {
                    v: number[];
                    c: number[];
                };
                "1679353200": {
                    v: number[];
                    c: number[];
                };
                "1679356800": {
                    v: number[];
                    c: number[];
                };
                "1679360400": {
                    v: number[];
                    c: number[];
                };
                "1679367600": {
                    v: number[];
                    c: number[];
                };
                "1679371200": {
                    v: number[];
                    c: number[];
                };
                "1679374800": {
                    v: number[];
                    c: number[];
                };
                "1679378400": {
                    v: number[];
                    c: number[];
                };
                "1679382000": {
                    v: number[];
                    c: number[];
                };
                "1679385600": {
                    v: number[];
                    c: number[];
                };
                "1679389200": {
                    v: number[];
                    c: number[];
                };
                "1679392800": {
                    v: number[];
                    c: number[];
                };
                "1679396400": {
                    v: number[];
                    c: number[];
                };
                "1679400000": {
                    v: number[];
                    c: number[];
                };
                "1679403600": {
                    v: number[];
                    c: number[];
                };
                "1679407200": {
                    v: number[];
                    c: number[];
                };
                "1679410800": {
                    v: number[];
                    c: number[];
                };
                "1679414400": {
                    v: number[];
                    c: number[];
                };
                "1679418000": {
                    v: number[];
                    c: number[];
                };
                "1679421600": {
                    v: number[];
                    c: number[];
                };
                "1679425200": {
                    v: number[];
                    c: number[];
                };
                "1679428800": {
                    v: number[];
                    c: number[];
                };
                "1679432400": {
                    v: number[];
                    c: number[];
                };
                "1679436000": {
                    v: number[];
                    c: number[];
                };
                "1679439600": {
                    v: number[];
                    c: number[];
                };
                "1679443200": {
                    v: number[];
                    c: number[];
                };
                "1679446800": {
                    v: number[];
                    c: number[];
                };
                "1679450400": {
                    v: number[];
                    c: number[];
                };
                "1679454000": {
                    v: number[];
                    c: number[];
                };
                "1679457600": {
                    v: number[];
                    c: number[];
                };
                "1679461200": {
                    v: number[];
                    c: number[];
                };
                "1679464800": {
                    v: number[];
                    c: number[];
                };
                "1679468400": {
                    v: number[];
                    c: number[];
                };
                "1679472000": {
                    v: number[];
                    c: number[];
                };
                "1679475600": {
                    v: number[];
                    c: number[];
                };
                "1679479200": {
                    v: number[];
                    c: number[];
                };
                "1679482800": {
                    v: number[];
                    c: number[];
                };
                "1679486400": {
                    v: number[];
                    c: number[];
                };
                "1679490000": {
                    v: number[];
                    c: number[];
                };
                "1679493600": {
                    v: number[];
                    c: number[];
                };
                "1679497200": {
                    v: number[];
                    c: number[];
                };
                "1679504400": {
                    v: number[];
                    c: number[];
                };
                "1679508000": {
                    v: number[];
                    c: number[];
                };
                "1679511600": {
                    v: number[];
                    c: number[];
                };
                "1679515200": {
                    v: number[];
                    c: number[];
                };
                "1679518800": {
                    v: number[];
                    c: number[];
                };
                "1679522400": {
                    v: number[];
                    c: number[];
                };
                "1679526000": {
                    v: number[];
                    c: number[];
                };
                "1679529600": {
                    v: number[];
                    c: number[];
                };
                "1679533200": {
                    v: number[];
                    c: number[];
                };
                "1679536800": {
                    v: number[];
                    c: number[];
                };
                "1679540400": {
                    v: number[];
                    c: number[];
                };
                "1679544000": {
                    v: number[];
                    c: number[];
                };
                "1679547600": {
                    v: number[];
                    c: number[];
                };
                "1679551200": {
                    v: number[];
                    c: number[];
                };
                "1679554800": {
                    v: number[];
                    c: number[];
                };
                "1679558400": {
                    v: number[];
                    c: number[];
                };
                "1679562000": {
                    v: number[];
                    c: number[];
                };
                "1679565600": {
                    v: number[];
                    c: number[];
                };
                "1679569200": {
                    v: number[];
                    c: number[];
                };
                "1679572800": {
                    v: number[];
                    c: number[];
                };
                "1679576400": {
                    v: number[];
                    c: number[];
                };
                "1679580000": {
                    v: number[];
                    c: number[];
                };
                "1679583600": {
                    v: number[];
                    c: number[];
                };
                "1679587200": {
                    v: number[];
                    c: number[];
                };
                "1679590800": {
                    v: number[];
                    c: number[];
                };
                "1679594400": {
                    v: number[];
                    c: number[];
                };
                "1679598000": {
                    v: number[];
                    c: number[];
                };
                "1679601600": {
                    v: number[];
                    c: number[];
                };
                "1679605200": {
                    v: number[];
                    c: number[];
                };
                "1679608800": {
                    v: number[];
                    c: number[];
                };
                "1679612400": {
                    v: number[];
                    c: number[];
                };
                "1679616000": {
                    v: number[];
                    c: number[];
                };
                "1679619600": {
                    v: number[];
                    c: number[];
                };
                "1679623200": {
                    v: number[];
                    c: number[];
                };
                "1679626800": {
                    v: number[];
                    c: number[];
                };
                "1679630400": {
                    v: number[];
                    c: number[];
                };
                "1679634000": {
                    v: number[];
                    c: number[];
                };
                "1679641200": {
                    v: number[];
                    c: number[];
                };
                "1679644800": {
                    v: number[];
                    c: number[];
                };
                "1679648400": {
                    v: number[];
                    c: number[];
                };
                "1679652000": {
                    v: number[];
                    c: number[];
                };
                "1679655600": {
                    v: number[];
                    c: number[];
                };
                "1679659200": {
                    v: number[];
                    c: number[];
                };
                "1679662800": {
                    v: number[];
                    c: number[];
                };
                "1679666400": {
                    v: number[];
                    c: number[];
                };
                "1679670000": {
                    v: number[];
                    c: number[];
                };
                "1679673600": {
                    v: number[];
                    c: number[];
                };
                "1679677200": {
                    v: number[];
                    c: number[];
                };
                "1679680800": {
                    v: number[];
                    c: number[];
                };
                "1679684400": {
                    v: number[];
                    c: number[];
                };
                "1679688000": {
                    v: number[];
                    c: number[];
                };
                "1679691600": {
                    v: number[];
                    c: number[];
                };
                "1679695200": {
                    v: number[];
                    c: number[];
                };
                "1679698800": {
                    v: number[];
                    c: number[];
                };
                "1679702400": {
                    v: number[];
                    c: number[];
                };
                "1679706000": {
                    v: number[];
                    c: number[];
                };
                "1679709600": {
                    v: number[];
                    c: number[];
                };
                "1679713200": {
                    v: number[];
                    c: number[];
                };
                "1679716800": {
                    v: number[];
                    c: number[];
                };
                "1679720400": {
                    v: number[];
                    c: number[];
                };
                "1679724000": {
                    v: number[];
                    c: number[];
                };
                "1679727600": {
                    v: number[];
                    c: number[];
                };
                "1679731200": {
                    v: number[];
                    c: number[];
                };
                "1679734800": {
                    v: number[];
                    c: number[];
                };
                "1679738400": {
                    v: number[];
                    c: number[];
                };
                "1679742000": {
                    v: number[];
                    c: number[];
                };
                "1679745600": {
                    v: number[];
                    c: number[];
                };
                "1679749200": {
                    v: number[];
                    c: number[];
                };
                "1679752800": {
                    v: number[];
                    c: number[];
                };
                "1679756400": {
                    v: number[];
                    c: number[];
                };
                "1679760000": {
                    v: number[];
                    c: number[];
                };
                "1679763600": {
                    v: number[];
                    c: number[];
                };
                "1679767200": {
                    v: number[];
                    c: number[];
                };
                "1679770800": {
                    v: number[];
                    c: number[];
                };
                "1679778000": {
                    v: number[];
                    c: number[];
                };
                "1679781600": {
                    v: number[];
                    c: number[];
                };
                "1679785200": {
                    v: number[];
                    c: number[];
                };
                "1679788800": {
                    v: number[];
                    c: number[];
                };
                "1679792400": {
                    v: number[];
                    c: number[];
                };
                "1679796000": {
                    v: number[];
                    c: number[];
                };
                "1679799600": {
                    v: number[];
                    c: number[];
                };
                "1679803200": {
                    v: number[];
                    c: number[];
                };
                "1679806800": {
                    v: number[];
                    c: number[];
                };
                "1679810400": {
                    v: number[];
                    c: number[];
                };
                "1679814000": {
                    v: number[];
                    c: number[];
                };
                "1679817600": {
                    v: number[];
                    c: number[];
                };
                "1679821200": {
                    v: number[];
                    c: number[];
                };
                "1679824800": {
                    v: number[];
                    c: number[];
                };
                "1679828400": {
                    v: number[];
                    c: number[];
                };
                "1679832000": {
                    v: number[];
                    c: number[];
                };
                "1679835600": {
                    v: number[];
                    c: number[];
                };
                "1679839200": {
                    v: number[];
                    c: number[];
                };
                "1679842800": {
                    v: number[];
                    c: number[];
                };
                "1679846400": {
                    v: number[];
                    c: number[];
                };
                "1679850000": {
                    v: number[];
                    c: number[];
                };
                "1679853600": {
                    v: number[];
                    c: number[];
                };
                "1679857200": {
                    v: number[];
                    c: number[];
                };
                "1679860800": {
                    v: number[];
                    c: number[];
                };
                "1679864400": {
                    v: number[];
                    c: number[];
                };
                "1679868000": {
                    v: number[];
                    c: number[];
                };
                "1679871600": {
                    v: number[];
                    c: number[];
                };
                "1679875200": {
                    v: number[];
                    c: number[];
                };
                "1679878800": {
                    v: number[];
                    c: number[];
                };
                "1679882400": {
                    v: number[];
                    c: number[];
                };
                "1679886000": {
                    v: number[];
                    c: number[];
                };
                "1679889600": {
                    v: number[];
                    c: number[];
                };
                "1679893200": {
                    v: number[];
                    c: number[];
                };
                "1679896800": {
                    v: number[];
                    c: number[];
                };
                "1679900400": {
                    v: number[];
                    c: number[];
                };
                "1679904000": {
                    v: number[];
                    c: number[];
                };
                "1679907600": {
                    v: number[];
                    c: number[];
                };
                "1679914800": {
                    v: number[];
                    c: number[];
                };
                "1679918400": {
                    v: number[];
                    c: number[];
                };
                "1679922000": {
                    v: number[];
                    c: number[];
                };
                "1679925600": {
                    v: number[];
                    c: number[];
                };
                "1679929200": {
                    v: number[];
                    c: number[];
                };
                "1679932800": {
                    v: number[];
                    c: number[];
                };
                "1679936400": {
                    v: number[];
                    c: number[];
                };
                "1679940000": {
                    v: number[];
                    c: number[];
                };
                "1679943600": {
                    v: number[];
                    c: number[];
                };
                "1679947200": {
                    v: number[];
                    c: number[];
                };
                "1679950800": {
                    v: number[];
                    c: number[];
                };
                "1679954400": {
                    v: number[];
                    c: number[];
                };
                "1679958000": {
                    v: number[];
                    c: number[];
                };
                "1679961600": {
                    v: number[];
                    c: number[];
                };
                "1679965200": {
                    v: number[];
                    c: number[];
                };
                "1679968800": {
                    v: number[];
                    c: number[];
                };
                "1679972400": {
                    v: number[];
                    c: number[];
                };
                "1679976000": {
                    v: number[];
                    c: number[];
                };
                "1679979600": {
                    v: number[];
                    c: number[];
                };
                "1679983200": {
                    v: number[];
                    c: number[];
                };
                "1679986800": {
                    v: number[];
                    c: number[];
                };
                "1679990400": {
                    v: number[];
                    c: number[];
                };
                "1679994000": {
                    v: number[];
                    c: number[];
                };
                "1679997600": {
                    v: number[];
                    c: number[];
                };
                "1680001200": {
                    v: number[];
                    c: number[];
                };
                "1680004800": {
                    v: number[];
                    c: number[];
                };
                "1680008400": {
                    v: number[];
                    c: number[];
                };
                "1680012000": {
                    v: number[];
                    c: number[];
                };
                "1680015600": {
                    v: number[];
                    c: number[];
                };
                "1680019200": {
                    v: number[];
                    c: number[];
                };
                "1680022800": {
                    v: number[];
                    c: number[];
                };
                "1680026400": {
                    v: number[];
                    c: number[];
                };
                "1680030000": {
                    v: number[];
                    c: number[];
                };
                "1680033600": {
                    v: number[];
                    c: number[];
                };
                "1680037200": {
                    v: number[];
                    c: number[];
                };
                "1680040800": {
                    v: number[];
                    c: number[];
                };
                "1680044400": {
                    v: number[];
                    c: number[];
                };
                "1680051600": {
                    v: number[];
                    c: number[];
                };
                "1680055200": {
                    v: number[];
                    c: number[];
                };
                "1680058800": {
                    v: number[];
                    c: number[];
                };
                "1680062400": {
                    v: number[];
                    c: number[];
                };
                "1680066000": {
                    v: number[];
                    c: number[];
                };
                "1680069600": {
                    v: number[];
                    c: number[];
                };
                "1680073200": {
                    v: number[];
                    c: number[];
                };
                "1680076800": {
                    v: number[];
                    c: number[];
                };
                "1680080400": {
                    v: number[];
                    c: number[];
                };
                "1680084000": {
                    v: number[];
                    c: number[];
                };
                "1680087600": {
                    v: number[];
                    c: number[];
                };
                "1680091200": {
                    v: number[];
                    c: number[];
                };
                "1680094800": {
                    v: number[];
                    c: number[];
                };
                "1680098400": {
                    v: number[];
                    c: number[];
                };
                "1680102000": {
                    v: number[];
                    c: number[];
                };
                "1680105600": {
                    v: number[];
                    c: number[];
                };
                "1680109200": {
                    v: number[];
                    c: number[];
                };
                "1680112800": {
                    v: number[];
                    c: number[];
                };
                "1680116400": {
                    v: number[];
                    c: number[];
                };
                "1680120000": {
                    v: number[];
                    c: number[];
                };
                "1680123600": {
                    v: number[];
                    c: number[];
                };
                "1680127200": {
                    v: number[];
                    c: number[];
                };
                "1680130800": {
                    v: number[];
                    c: number[];
                };
                "1680134400": {
                    v: number[];
                    c: number[];
                };
                "1680138000": {
                    v: number[];
                    c: number[];
                };
                "1680141600": {
                    v: number[];
                    c: number[];
                };
                "1680145200": {
                    v: number[];
                    c: number[];
                };
                "1680148800": {
                    v: number[];
                    c: number[];
                };
                "1680152400": {
                    v: number[];
                    c: number[];
                };
                "1680156000": {
                    v: number[];
                    c: number[];
                };
                "1680159600": {
                    v: number[];
                    c: number[];
                };
                "1680163200": {
                    v: number[];
                    c: number[];
                };
                "1680166800": {
                    v: number[];
                    c: number[];
                };
                "1680170400": {
                    v: number[];
                    c: number[];
                };
                "1680174000": {
                    v: number[];
                    c: number[];
                };
                "1680177600": {
                    v: number[];
                    c: number[];
                };
                "1680181200": {
                    v: number[];
                    c: number[];
                };
                "1680188400": {
                    v: number[];
                    c: number[];
                };
                "1680192000": {
                    v: number[];
                    c: number[];
                };
                "1680195600": {
                    v: number[];
                    c: number[];
                };
                "1680199200": {
                    v: number[];
                    c: number[];
                };
                "1680202800": {
                    v: number[];
                    c: number[];
                };
                "1680206400": {
                    v: number[];
                    c: number[];
                };
                "1680210000": {
                    v: number[];
                    c: number[];
                };
                "1680213600": {
                    v: number[];
                    c: number[];
                };
                "1680217200": {
                    v: number[];
                    c: number[];
                };
                "1680220800": {
                    v: number[];
                    c: number[];
                };
                "1680224400": {
                    v: number[];
                    c: number[];
                };
                "1680228000": {
                    v: number[];
                    c: number[];
                };
                "1680231600": {
                    v: number[];
                    c: number[];
                };
                "1680235200": {
                    v: number[];
                    c: number[];
                };
                "1680238800": {
                    v: number[];
                    c: number[];
                };
                "1680242400": {
                    v: number[];
                    c: number[];
                };
                "1680246000": {
                    v: number[];
                    c: number[];
                };
                "1680249600": {
                    v: number[];
                    c: number[];
                };
                "1680253200": {
                    v: number[];
                    c: number[];
                };
                "1680256800": {
                    v: number[];
                    c: number[];
                };
                "1680260400": {
                    v: number[];
                    c: number[];
                };
                "1680264000": {
                    v: number[];
                    c: number[];
                };
                "1680267600": {
                    v: number[];
                    c: number[];
                };
                "1680271200": {
                    v: number[];
                    c: number[];
                };
                "1680274800": {
                    v: number[];
                    c: number[];
                };
                "1680278400": {
                    v: number[];
                    c: number[];
                };
                "1680282000": {
                    v: number[];
                    c: number[];
                };
                "1680285600": {
                    v: number[];
                    c: number[];
                };
                "1680289200": {
                    v: number[];
                    c: number[];
                };
                "1680292800": {
                    v: number[];
                    c: number[];
                };
                "1680296400": {
                    v: number[];
                    c: number[];
                };
                "1680300000": {
                    v: number[];
                    c: number[];
                };
                "1680303600": {
                    v: number[];
                    c: number[];
                };
                "1680307200": {
                    v: number[];
                    c: number[];
                };
                "1680310800": {
                    v: number[];
                    c: number[];
                };
                "1680314400": {
                    v: number[];
                    c: number[];
                };
                "1680318000": {
                    v: number[];
                    c: number[];
                };
                "1680325200": {
                    v: number[];
                    c: number[];
                };
                "1680328800": {
                    v: number[];
                    c: number[];
                };
                "1680332400": {
                    v: number[];
                    c: number[];
                };
                "1680336000": {
                    v: number[];
                    c: number[];
                };
                "1680339600": {
                    v: number[];
                    c: number[];
                };
                "1680343200": {
                    v: number[];
                    c: number[];
                };
                "1680346800": {
                    v: number[];
                    c: number[];
                };
                "1680350400": {
                    v: number[];
                    c: number[];
                };
                "1680354000": {
                    v: number[];
                    c: number[];
                };
                "1680357600": {
                    v: number[];
                    c: number[];
                };
                "1680361200": {
                    v: number[];
                    c: number[];
                };
                "1680364800": {
                    v: number[];
                    c: number[];
                };
                "1680368400": {
                    v: number[];
                    c: number[];
                };
                "1680372000": {
                    v: number[];
                    c: number[];
                };
                "1680375600": {
                    v: number[];
                    c: number[];
                };
                "1680379200": {
                    v: number[];
                    c: number[];
                };
                "1680382800": {
                    v: number[];
                    c: number[];
                };
                "1680386400": {
                    v: number[];
                    c: number[];
                };
                "1680390000": {
                    v: number[];
                    c: number[];
                };
                "1680393600": {
                    v: number[];
                    c: number[];
                };
                "1680397200": {
                    v: number[];
                    c: number[];
                };
                "1680400800": {
                    v: number[];
                    c: number[];
                };
                "1680404400": {
                    v: number[];
                    c: number[];
                };
                "1680408000": {
                    v: number[];
                    c: number[];
                };
                "1680411600": {
                    v: number[];
                    c: number[];
                };
                "1680415200": {
                    v: number[];
                    c: number[];
                };
                "1680418800": {
                    v: number[];
                    c: number[];
                };
                "1680422400": {
                    v: number[];
                    c: number[];
                };
                "1680426000": {
                    v: number[];
                    c: number[];
                };
                "1680429600": {
                    v: number[];
                    c: number[];
                };
                "1680433200": {
                    v: number[];
                    c: number[];
                };
                "1680436800": {
                    v: number[];
                    c: number[];
                };
                "1680440400": {
                    v: number[];
                    c: number[];
                };
                "1680444000": {
                    v: number[];
                    c: number[];
                };
                "1680447600": {
                    v: number[];
                    c: number[];
                };
                "1680451200": {
                    v: number[];
                    c: number[];
                };
                "1680454800": {
                    v: number[];
                    c: number[];
                };
                "1680458400": {
                    v: number[];
                    c: number[];
                };
                "1680465600": {
                    v: number[];
                    c: number[];
                };
                "1680469200": {
                    v: number[];
                    c: number[];
                };
                "1680472800": {
                    v: number[];
                    c: number[];
                };
                "1680476400": {
                    v: number[];
                    c: number[];
                };
                "1680480000": {
                    v: number[];
                    c: number[];
                };
                "1680483600": {
                    v: number[];
                    c: number[];
                };
                "1680487200": {
                    v: number[];
                    c: number[];
                };
                "1680490800": {
                    v: number[];
                    c: number[];
                };
                "1680494400": {
                    v: number[];
                    c: number[];
                };
                "1680498000": {
                    v: number[];
                    c: number[];
                };
                "1680501600": {
                    v: number[];
                    c: number[];
                };
                "1680505200": {
                    v: number[];
                    c: number[];
                };
                "1680508800": {
                    v: number[];
                    c: number[];
                };
                "1680512400": {
                    v: number[];
                    c: number[];
                };
                "1680516000": {
                    v: number[];
                    c: number[];
                };
                "1680519600": {
                    v: number[];
                    c: number[];
                };
                "1680523200": {
                    v: number[];
                    c: number[];
                };
                "1680526800": {
                    v: number[];
                    c: number[];
                };
                "1680530400": {
                    v: number[];
                    c: number[];
                };
                "1680534000": {
                    v: number[];
                    c: number[];
                };
                "1680537600": {
                    v: number[];
                    c: number[];
                };
                "1680541200": {
                    v: number[];
                    c: number[];
                };
                "1680544800": {
                    v: number[];
                    c: number[];
                };
                "1680548400": {
                    v: number[];
                    c: number[];
                };
                "1680552000": {
                    v: number[];
                    c: number[];
                };
                "1680555600": {
                    v: number[];
                    c: number[];
                };
                "1680559200": {
                    v: number[];
                    c: number[];
                };
                "1680562800": {
                    v: number[];
                    c: number[];
                };
                "1680566400": {
                    v: number[];
                    c: number[];
                };
                "1680570000": {
                    v: number[];
                    c: number[];
                };
                "1680573600": {
                    v: number[];
                    c: number[];
                };
                "1680578518": {
                    v: number[];
                };
            };
        };
        status: {
            timestamp: string;
            error_code: string;
            error_message: string;
            elapsed: string;
            credit_count: number;
        };
    };
}
/// <amd-module name="@scom/scom-trading-chart/store/dummy/3-months.json.ts" />
declare module "@scom/scom-trading-chart/store/dummy/3-months.json.ts" {
    export const threeMonths: {
        data: {
            points: {
                "1672804800": {
                    v: number[];
                    c: number[];
                };
                "1672819200": {
                    v: number[];
                    c: number[];
                };
                "1672830000": {
                    v: number[];
                    c: number[];
                };
                "1672840800": {
                    v: number[];
                    c: number[];
                };
                "1672851600": {
                    v: number[];
                    c: number[];
                };
                "1672862400": {
                    v: number[];
                    c: number[];
                };
                "1672873200": {
                    v: number[];
                    c: number[];
                };
                "1672884000": {
                    v: number[];
                    c: number[];
                };
                "1672894800": {
                    v: number[];
                    c: number[];
                };
                "1672905600": {
                    v: number[];
                    c: number[];
                };
                "1672916400": {
                    v: number[];
                    c: number[];
                };
                "1672927200": {
                    v: number[];
                    c: number[];
                };
                "1672941600": {
                    v: number[];
                    c: number[];
                };
                "1672952400": {
                    v: number[];
                    c: number[];
                };
                "1672963200": {
                    v: number[];
                    c: number[];
                };
                "1672974000": {
                    v: number[];
                    c: number[];
                };
                "1672984800": {
                    v: number[];
                    c: number[];
                };
                "1672995600": {
                    v: number[];
                    c: number[];
                };
                "1673006400": {
                    v: number[];
                    c: number[];
                };
                "1673017200": {
                    v: number[];
                    c: number[];
                };
                "1673028000": {
                    v: number[];
                    c: number[];
                };
                "1673038800": {
                    v: number[];
                    c: number[];
                };
                "1673049600": {
                    v: number[];
                    c: number[];
                };
                "1673060400": {
                    v: number[];
                    c: number[];
                };
                "1673074800": {
                    v: number[];
                    c: number[];
                };
                "1673085600": {
                    v: number[];
                    c: number[];
                };
                "1673096400": {
                    v: number[];
                    c: number[];
                };
                "1673107200": {
                    v: number[];
                    c: number[];
                };
                "1673118000": {
                    v: number[];
                    c: number[];
                };
                "1673128800": {
                    v: number[];
                    c: number[];
                };
                "1673139600": {
                    v: number[];
                    c: number[];
                };
                "1673150400": {
                    v: number[];
                    c: number[];
                };
                "1673161200": {
                    v: number[];
                    c: number[];
                };
                "1673172000": {
                    v: number[];
                    c: number[];
                };
                "1673182800": {
                    v: number[];
                    c: number[];
                };
                "1673193600": {
                    v: number[];
                    c: number[];
                };
                "1673208000": {
                    v: number[];
                    c: number[];
                };
                "1673218800": {
                    v: number[];
                    c: number[];
                };
                "1673229600": {
                    v: number[];
                    c: number[];
                };
                "1673240400": {
                    v: number[];
                    c: number[];
                };
                "1673251200": {
                    v: number[];
                    c: number[];
                };
                "1673262000": {
                    v: number[];
                    c: number[];
                };
                "1673272800": {
                    v: number[];
                    c: number[];
                };
                "1673283600": {
                    v: number[];
                    c: number[];
                };
                "1673294400": {
                    v: number[];
                    c: number[];
                };
                "1673305200": {
                    v: number[];
                    c: number[];
                };
                "1673316000": {
                    v: number[];
                    c: number[];
                };
                "1673326800": {
                    v: number[];
                    c: number[];
                };
                "1673341200": {
                    v: number[];
                    c: number[];
                };
                "1673352000": {
                    v: number[];
                    c: number[];
                };
                "1673362800": {
                    v: number[];
                    c: number[];
                };
                "1673373600": {
                    v: number[];
                    c: number[];
                };
                "1673384400": {
                    v: number[];
                    c: number[];
                };
                "1673395200": {
                    v: number[];
                    c: number[];
                };
                "1673406000": {
                    v: number[];
                    c: number[];
                };
                "1673416800": {
                    v: number[];
                    c: number[];
                };
                "1673427600": {
                    v: number[];
                    c: number[];
                };
                "1673438400": {
                    v: number[];
                    c: number[];
                };
                "1673449200": {
                    v: number[];
                    c: number[];
                };
                "1673460000": {
                    v: number[];
                    c: number[];
                };
                "1673474400": {
                    v: number[];
                    c: number[];
                };
                "1673485200": {
                    v: number[];
                    c: number[];
                };
                "1673496000": {
                    v: number[];
                    c: number[];
                };
                "1673506800": {
                    v: number[];
                    c: number[];
                };
                "1673517600": {
                    v: number[];
                    c: number[];
                };
                "1673528400": {
                    v: number[];
                    c: number[];
                };
                "1673539200": {
                    v: number[];
                    c: number[];
                };
                "1673550000": {
                    v: number[];
                    c: number[];
                };
                "1673560800": {
                    v: number[];
                    c: number[];
                };
                "1673571600": {
                    v: number[];
                    c: number[];
                };
                "1673582400": {
                    v: number[];
                    c: number[];
                };
                "1673593200": {
                    v: number[];
                    c: number[];
                };
                "1673607600": {
                    v: number[];
                    c: number[];
                };
                "1673618400": {
                    v: number[];
                    c: number[];
                };
                "1673629200": {
                    v: number[];
                    c: number[];
                };
                "1673640000": {
                    v: number[];
                    c: number[];
                };
                "1673650800": {
                    v: number[];
                    c: number[];
                };
                "1673661600": {
                    v: number[];
                    c: number[];
                };
                "1673672400": {
                    v: number[];
                    c: number[];
                };
                "1673683200": {
                    v: number[];
                    c: number[];
                };
                "1673694000": {
                    v: number[];
                    c: number[];
                };
                "1673704800": {
                    v: number[];
                    c: number[];
                };
                "1673715600": {
                    v: number[];
                    c: number[];
                };
                "1673726400": {
                    v: number[];
                    c: number[];
                };
                "1673740800": {
                    v: number[];
                    c: number[];
                };
                "1673751600": {
                    v: number[];
                    c: number[];
                };
                "1673762400": {
                    v: number[];
                    c: number[];
                };
                "1673773200": {
                    v: number[];
                    c: number[];
                };
                "1673784000": {
                    v: number[];
                    c: number[];
                };
                "1673794800": {
                    v: number[];
                    c: number[];
                };
                "1673805600": {
                    v: number[];
                    c: number[];
                };
                "1673816400": {
                    v: number[];
                    c: number[];
                };
                "1673827200": {
                    v: number[];
                    c: number[];
                };
                "1673838000": {
                    v: number[];
                    c: number[];
                };
                "1673848800": {
                    v: number[];
                    c: number[];
                };
                "1673859600": {
                    v: number[];
                    c: number[];
                };
                "1673874000": {
                    v: number[];
                    c: number[];
                };
                "1673884800": {
                    v: number[];
                    c: number[];
                };
                "1673895600": {
                    v: number[];
                    c: number[];
                };
                "1673906400": {
                    v: number[];
                    c: number[];
                };
                "1673917200": {
                    v: number[];
                    c: number[];
                };
                "1673928000": {
                    v: number[];
                    c: number[];
                };
                "1673938800": {
                    v: number[];
                    c: number[];
                };
                "1673949600": {
                    v: number[];
                    c: number[];
                };
                "1673960400": {
                    v: number[];
                    c: number[];
                };
                "1673971200": {
                    v: number[];
                    c: number[];
                };
                "1673982000": {
                    v: number[];
                    c: number[];
                };
                "1673996400": {
                    v: number[];
                    c: number[];
                };
                "1674007200": {
                    v: number[];
                    c: number[];
                };
                "1674018000": {
                    v: number[];
                    c: number[];
                };
                "1674028800": {
                    v: number[];
                    c: number[];
                };
                "1674039600": {
                    v: number[];
                    c: number[];
                };
                "1674050400": {
                    v: number[];
                    c: number[];
                };
                "1674061200": {
                    v: number[];
                    c: number[];
                };
                "1674072000": {
                    v: number[];
                    c: number[];
                };
                "1674082800": {
                    v: number[];
                    c: number[];
                };
                "1674093600": {
                    v: number[];
                    c: number[];
                };
                "1674104400": {
                    v: number[];
                    c: number[];
                };
                "1674115200": {
                    v: number[];
                    c: number[];
                };
                "1674129600": {
                    v: number[];
                    c: number[];
                };
                "1674140400": {
                    v: number[];
                    c: number[];
                };
                "1674151200": {
                    v: number[];
                    c: number[];
                };
                "1674162000": {
                    v: number[];
                    c: number[];
                };
                "1674172800": {
                    v: number[];
                    c: number[];
                };
                "1674183600": {
                    v: number[];
                    c: number[];
                };
                "1674194400": {
                    v: number[];
                    c: number[];
                };
                "1674205200": {
                    v: number[];
                    c: number[];
                };
                "1674216000": {
                    v: number[];
                    c: number[];
                };
                "1674226800": {
                    v: number[];
                    c: number[];
                };
                "1674237600": {
                    v: number[];
                    c: number[];
                };
                "1674248400": {
                    v: number[];
                    c: number[];
                };
                "1674262800": {
                    v: number[];
                    c: number[];
                };
                "1674273600": {
                    v: number[];
                    c: number[];
                };
                "1674284400": {
                    v: number[];
                    c: number[];
                };
                "1674295200": {
                    v: number[];
                    c: number[];
                };
                "1674306000": {
                    v: number[];
                    c: number[];
                };
                "1674316800": {
                    v: number[];
                    c: number[];
                };
                "1674327600": {
                    v: number[];
                    c: number[];
                };
                "1674338400": {
                    v: number[];
                    c: number[];
                };
                "1674349200": {
                    v: number[];
                    c: number[];
                };
                "1674360000": {
                    v: number[];
                    c: number[];
                };
                "1674370800": {
                    v: number[];
                    c: number[];
                };
                "1674381600": {
                    v: number[];
                    c: number[];
                };
                "1674396000": {
                    v: number[];
                    c: number[];
                };
                "1674406800": {
                    v: number[];
                    c: number[];
                };
                "1674417600": {
                    v: number[];
                    c: number[];
                };
                "1674428400": {
                    v: number[];
                    c: number[];
                };
                "1674439200": {
                    v: number[];
                    c: number[];
                };
                "1674450000": {
                    v: number[];
                    c: number[];
                };
                "1674460800": {
                    v: number[];
                    c: number[];
                };
                "1674471600": {
                    v: number[];
                    c: number[];
                };
                "1674482400": {
                    v: number[];
                    c: number[];
                };
                "1674493200": {
                    v: number[];
                    c: number[];
                };
                "1674504000": {
                    v: number[];
                    c: number[];
                };
                "1674514800": {
                    v: number[];
                    c: number[];
                };
                "1674529200": {
                    v: number[];
                    c: number[];
                };
                "1674540000": {
                    v: number[];
                    c: number[];
                };
                "1674550800": {
                    v: number[];
                    c: number[];
                };
                "1674561600": {
                    v: number[];
                    c: number[];
                };
                "1674572400": {
                    v: number[];
                    c: number[];
                };
                "1674583200": {
                    v: number[];
                    c: number[];
                };
                "1674594000": {
                    v: number[];
                    c: number[];
                };
                "1674604800": {
                    v: number[];
                    c: number[];
                };
                "1674615600": {
                    v: number[];
                    c: number[];
                };
                "1674626400": {
                    v: number[];
                    c: number[];
                };
                "1674637200": {
                    v: number[];
                    c: number[];
                };
                "1674648000": {
                    v: number[];
                    c: number[];
                };
                "1674662400": {
                    v: number[];
                    c: number[];
                };
                "1674673200": {
                    v: number[];
                    c: number[];
                };
                "1674684000": {
                    v: number[];
                    c: number[];
                };
                "1674694800": {
                    v: number[];
                    c: number[];
                };
                "1674705600": {
                    v: number[];
                    c: number[];
                };
                "1674716400": {
                    v: number[];
                    c: number[];
                };
                "1674727200": {
                    v: number[];
                    c: number[];
                };
                "1674738000": {
                    v: number[];
                    c: number[];
                };
                "1674748800": {
                    v: number[];
                    c: number[];
                };
                "1674759600": {
                    v: number[];
                    c: number[];
                };
                "1674770400": {
                    v: number[];
                    c: number[];
                };
                "1674781200": {
                    v: number[];
                    c: number[];
                };
                "1674795600": {
                    v: number[];
                    c: number[];
                };
                "1674806400": {
                    v: number[];
                    c: number[];
                };
                "1674817200": {
                    v: number[];
                    c: number[];
                };
                "1674828000": {
                    v: number[];
                    c: number[];
                };
                "1674838800": {
                    v: number[];
                    c: number[];
                };
                "1674849600": {
                    v: number[];
                    c: number[];
                };
                "1674860400": {
                    v: number[];
                    c: number[];
                };
                "1674871200": {
                    v: number[];
                    c: number[];
                };
                "1674882000": {
                    v: number[];
                    c: number[];
                };
                "1674892800": {
                    v: number[];
                    c: number[];
                };
                "1674903600": {
                    v: number[];
                    c: number[];
                };
                "1674914400": {
                    v: number[];
                    c: number[];
                };
                "1674928800": {
                    v: number[];
                    c: number[];
                };
                "1674939600": {
                    v: number[];
                    c: number[];
                };
                "1674950400": {
                    v: number[];
                    c: number[];
                };
                "1674961200": {
                    v: number[];
                    c: number[];
                };
                "1674972000": {
                    v: number[];
                    c: number[];
                };
                "1674982800": {
                    v: number[];
                    c: number[];
                };
                "1674993600": {
                    v: number[];
                    c: number[];
                };
                "1675004400": {
                    v: number[];
                    c: number[];
                };
                "1675015200": {
                    v: number[];
                    c: number[];
                };
                "1675026000": {
                    v: number[];
                    c: number[];
                };
                "1675036800": {
                    v: number[];
                    c: number[];
                };
                "1675051200": {
                    v: number[];
                    c: number[];
                };
                "1675062000": {
                    v: number[];
                    c: number[];
                };
                "1675072800": {
                    v: number[];
                    c: number[];
                };
                "1675083600": {
                    v: number[];
                    c: number[];
                };
                "1675094400": {
                    v: number[];
                    c: number[];
                };
                "1675105200": {
                    v: number[];
                    c: number[];
                };
                "1675116000": {
                    v: number[];
                    c: number[];
                };
                "1675126800": {
                    v: number[];
                    c: number[];
                };
                "1675137600": {
                    v: number[];
                    c: number[];
                };
                "1675148400": {
                    v: number[];
                    c: number[];
                };
                "1675159200": {
                    v: number[];
                    c: number[];
                };
                "1675170000": {
                    v: number[];
                    c: number[];
                };
                "1675184400": {
                    v: number[];
                    c: number[];
                };
                "1675195200": {
                    v: number[];
                    c: number[];
                };
                "1675206000": {
                    v: number[];
                    c: number[];
                };
                "1675216800": {
                    v: number[];
                    c: number[];
                };
                "1675227600": {
                    v: number[];
                    c: number[];
                };
                "1675238400": {
                    v: number[];
                    c: number[];
                };
                "1675249200": {
                    v: number[];
                    c: number[];
                };
                "1675260000": {
                    v: number[];
                    c: number[];
                };
                "1675270800": {
                    v: number[];
                    c: number[];
                };
                "1675281600": {
                    v: number[];
                    c: number[];
                };
                "1675292400": {
                    v: number[];
                    c: number[];
                };
                "1675303200": {
                    v: number[];
                    c: number[];
                };
                "1675317600": {
                    v: number[];
                    c: number[];
                };
                "1675328400": {
                    v: number[];
                    c: number[];
                };
                "1675339200": {
                    v: number[];
                    c: number[];
                };
                "1675350000": {
                    v: number[];
                    c: number[];
                };
                "1675360800": {
                    v: number[];
                    c: number[];
                };
                "1675371600": {
                    v: number[];
                    c: number[];
                };
                "1675382400": {
                    v: number[];
                    c: number[];
                };
                "1675393200": {
                    v: number[];
                    c: number[];
                };
                "1675404000": {
                    v: number[];
                    c: number[];
                };
                "1675414800": {
                    v: number[];
                    c: number[];
                };
                "1675425600": {
                    v: number[];
                    c: number[];
                };
                "1675436400": {
                    v: number[];
                    c: number[];
                };
                "1675450800": {
                    v: number[];
                    c: number[];
                };
                "1675461600": {
                    v: number[];
                    c: number[];
                };
                "1675472400": {
                    v: number[];
                    c: number[];
                };
                "1675483200": {
                    v: number[];
                    c: number[];
                };
                "1675494000": {
                    v: number[];
                    c: number[];
                };
                "1675504800": {
                    v: number[];
                    c: number[];
                };
                "1675515600": {
                    v: number[];
                    c: number[];
                };
                "1675526400": {
                    v: number[];
                    c: number[];
                };
                "1675537200": {
                    v: number[];
                    c: number[];
                };
                "1675548000": {
                    v: number[];
                    c: number[];
                };
                "1675558800": {
                    v: number[];
                    c: number[];
                };
                "1675569600": {
                    v: number[];
                    c: number[];
                };
                "1675584000": {
                    v: number[];
                    c: number[];
                };
                "1675594800": {
                    v: number[];
                    c: number[];
                };
                "1675605600": {
                    v: number[];
                    c: number[];
                };
                "1675616400": {
                    v: number[];
                    c: number[];
                };
                "1675627200": {
                    v: number[];
                    c: number[];
                };
                "1675638000": {
                    v: number[];
                    c: number[];
                };
                "1675648800": {
                    v: number[];
                    c: number[];
                };
                "1675659600": {
                    v: number[];
                    c: number[];
                };
                "1675670400": {
                    v: number[];
                    c: number[];
                };
                "1675681200": {
                    v: number[];
                    c: number[];
                };
                "1675692000": {
                    v: number[];
                    c: number[];
                };
                "1675702800": {
                    v: number[];
                    c: number[];
                };
                "1675717200": {
                    v: number[];
                    c: number[];
                };
                "1675728000": {
                    v: number[];
                    c: number[];
                };
                "1675738800": {
                    v: number[];
                    c: number[];
                };
                "1675749600": {
                    v: number[];
                    c: number[];
                };
                "1675760400": {
                    v: number[];
                    c: number[];
                };
                "1675771200": {
                    v: number[];
                    c: number[];
                };
                "1675782000": {
                    v: number[];
                    c: number[];
                };
                "1675792800": {
                    v: number[];
                    c: number[];
                };
                "1675803600": {
                    v: number[];
                    c: number[];
                };
                "1675814400": {
                    v: number[];
                    c: number[];
                };
                "1675825200": {
                    v: number[];
                    c: number[];
                };
                "1675836000": {
                    v: number[];
                    c: number[];
                };
                "1675850400": {
                    v: number[];
                    c: number[];
                };
                "1675861200": {
                    v: number[];
                    c: number[];
                };
                "1675872000": {
                    v: number[];
                    c: number[];
                };
                "1675882800": {
                    v: number[];
                    c: number[];
                };
                "1675893600": {
                    v: number[];
                    c: number[];
                };
                "1675904400": {
                    v: number[];
                    c: number[];
                };
                "1675915200": {
                    v: number[];
                    c: number[];
                };
                "1675926000": {
                    v: number[];
                    c: number[];
                };
                "1675936800": {
                    v: number[];
                    c: number[];
                };
                "1675947600": {
                    v: number[];
                    c: number[];
                };
                "1675958400": {
                    v: number[];
                    c: number[];
                };
                "1675969200": {
                    v: number[];
                    c: number[];
                };
                "1675983600": {
                    v: number[];
                    c: number[];
                };
                "1675994400": {
                    v: number[];
                    c: number[];
                };
                "1676005200": {
                    v: number[];
                    c: number[];
                };
                "1676016000": {
                    v: number[];
                    c: number[];
                };
                "1676026800": {
                    v: number[];
                    c: number[];
                };
                "1676037600": {
                    v: number[];
                    c: number[];
                };
                "1676048400": {
                    v: number[];
                    c: number[];
                };
                "1676059200": {
                    v: number[];
                    c: number[];
                };
                "1676070000": {
                    v: number[];
                    c: number[];
                };
                "1676080800": {
                    v: number[];
                    c: number[];
                };
                "1676091600": {
                    v: number[];
                    c: number[];
                };
                "1676102400": {
                    v: number[];
                    c: number[];
                };
                "1676116800": {
                    v: number[];
                    c: number[];
                };
                "1676127600": {
                    v: number[];
                    c: number[];
                };
                "1676138400": {
                    v: number[];
                    c: number[];
                };
                "1676149200": {
                    v: number[];
                    c: number[];
                };
                "1676160000": {
                    v: number[];
                    c: number[];
                };
                "1676170800": {
                    v: number[];
                    c: number[];
                };
                "1676181600": {
                    v: number[];
                    c: number[];
                };
                "1676192400": {
                    v: number[];
                    c: number[];
                };
                "1676203200": {
                    v: number[];
                    c: number[];
                };
                "1676214000": {
                    v: number[];
                    c: number[];
                };
                "1676224800": {
                    v: number[];
                    c: number[];
                };
                "1676239200": {
                    v: number[];
                    c: number[];
                };
                "1676250000": {
                    v: number[];
                    c: number[];
                };
                "1676260800": {
                    v: number[];
                    c: number[];
                };
                "1676271600": {
                    v: number[];
                    c: number[];
                };
                "1676282400": {
                    v: number[];
                    c: number[];
                };
                "1676293200": {
                    v: number[];
                    c: number[];
                };
                "1676304000": {
                    v: number[];
                    c: number[];
                };
                "1676314800": {
                    v: number[];
                    c: number[];
                };
                "1676325600": {
                    v: number[];
                    c: number[];
                };
                "1676336400": {
                    v: number[];
                    c: number[];
                };
                "1676347200": {
                    v: number[];
                    c: number[];
                };
                "1676358000": {
                    v: number[];
                    c: number[];
                };
                "1676372400": {
                    v: number[];
                    c: number[];
                };
                "1676383200": {
                    v: number[];
                    c: number[];
                };
                "1676394000": {
                    v: number[];
                    c: number[];
                };
                "1676404800": {
                    v: number[];
                    c: number[];
                };
                "1676415600": {
                    v: number[];
                    c: number[];
                };
                "1676426400": {
                    v: number[];
                    c: number[];
                };
                "1676437200": {
                    v: number[];
                    c: number[];
                };
                "1676448000": {
                    v: number[];
                    c: number[];
                };
                "1676458800": {
                    v: number[];
                    c: number[];
                };
                "1676469600": {
                    v: number[];
                    c: number[];
                };
                "1676480400": {
                    v: number[];
                    c: number[];
                };
                "1676491200": {
                    v: number[];
                    c: number[];
                };
                "1676505600": {
                    v: number[];
                    c: number[];
                };
                "1676516400": {
                    v: number[];
                    c: number[];
                };
                "1676527200": {
                    v: number[];
                    c: number[];
                };
                "1676538000": {
                    v: number[];
                    c: number[];
                };
                "1676548800": {
                    v: number[];
                    c: number[];
                };
                "1676559600": {
                    v: number[];
                    c: number[];
                };
                "1676570400": {
                    v: number[];
                    c: number[];
                };
                "1676581200": {
                    v: number[];
                    c: number[];
                };
                "1676592000": {
                    v: number[];
                    c: number[];
                };
                "1676602800": {
                    v: number[];
                    c: number[];
                };
                "1676613600": {
                    v: number[];
                    c: number[];
                };
                "1676624400": {
                    v: number[];
                    c: number[];
                };
                "1676638800": {
                    v: number[];
                    c: number[];
                };
                "1676649600": {
                    v: number[];
                    c: number[];
                };
                "1676660400": {
                    v: number[];
                    c: number[];
                };
                "1676671200": {
                    v: number[];
                    c: number[];
                };
                "1676682000": {
                    v: number[];
                    c: number[];
                };
                "1676692800": {
                    v: number[];
                    c: number[];
                };
                "1676703600": {
                    v: number[];
                    c: number[];
                };
                "1676714400": {
                    v: number[];
                    c: number[];
                };
                "1676725200": {
                    v: number[];
                    c: number[];
                };
                "1676736000": {
                    v: number[];
                    c: number[];
                };
                "1676746800": {
                    v: number[];
                    c: number[];
                };
                "1676757600": {
                    v: number[];
                    c: number[];
                };
                "1676772000": {
                    v: number[];
                    c: number[];
                };
                "1676782800": {
                    v: number[];
                    c: number[];
                };
                "1676793600": {
                    v: number[];
                    c: number[];
                };
                "1676804400": {
                    v: number[];
                    c: number[];
                };
                "1676815200": {
                    v: number[];
                    c: number[];
                };
                "1676826000": {
                    v: number[];
                    c: number[];
                };
                "1676836800": {
                    v: number[];
                    c: number[];
                };
                "1676847600": {
                    v: number[];
                    c: number[];
                };
                "1676858400": {
                    v: number[];
                    c: number[];
                };
                "1676869200": {
                    v: number[];
                    c: number[];
                };
                "1676880000": {
                    v: number[];
                    c: number[];
                };
                "1676890800": {
                    v: number[];
                    c: number[];
                };
                "1676905200": {
                    v: number[];
                    c: number[];
                };
                "1676916000": {
                    v: number[];
                    c: number[];
                };
                "1676926800": {
                    v: number[];
                    c: number[];
                };
                "1676937600": {
                    v: number[];
                    c: number[];
                };
                "1676948400": {
                    v: number[];
                    c: number[];
                };
                "1676959200": {
                    v: number[];
                    c: number[];
                };
                "1676970000": {
                    v: number[];
                    c: number[];
                };
                "1676980800": {
                    v: number[];
                    c: number[];
                };
                "1676991600": {
                    v: number[];
                    c: number[];
                };
                "1677002400": {
                    v: number[];
                    c: number[];
                };
                "1677013200": {
                    v: number[];
                    c: number[];
                };
                "1677024000": {
                    v: number[];
                    c: number[];
                };
                "1677038400": {
                    v: number[];
                    c: number[];
                };
                "1677049200": {
                    v: number[];
                    c: number[];
                };
                "1677060000": {
                    v: number[];
                    c: number[];
                };
                "1677070800": {
                    v: number[];
                    c: number[];
                };
                "1677081600": {
                    v: number[];
                    c: number[];
                };
                "1677092400": {
                    v: number[];
                    c: number[];
                };
                "1677103200": {
                    v: number[];
                    c: number[];
                };
                "1677114000": {
                    v: number[];
                    c: number[];
                };
                "1677124800": {
                    v: number[];
                    c: number[];
                };
                "1677135600": {
                    v: number[];
                    c: number[];
                };
                "1677146400": {
                    v: number[];
                    c: number[];
                };
                "1677157200": {
                    v: number[];
                    c: number[];
                };
                "1677171600": {
                    v: number[];
                    c: number[];
                };
                "1677182400": {
                    v: number[];
                    c: number[];
                };
                "1677193200": {
                    v: number[];
                    c: number[];
                };
                "1677204000": {
                    v: number[];
                    c: number[];
                };
                "1677214800": {
                    v: number[];
                    c: number[];
                };
                "1677225600": {
                    v: number[];
                    c: number[];
                };
                "1677236400": {
                    v: number[];
                    c: number[];
                };
                "1677247200": {
                    v: number[];
                    c: number[];
                };
                "1677258000": {
                    v: number[];
                    c: number[];
                };
                "1677268800": {
                    v: number[];
                    c: number[];
                };
                "1677279600": {
                    v: number[];
                    c: number[];
                };
                "1677294000": {
                    v: number[];
                    c: number[];
                };
                "1677304800": {
                    v: number[];
                    c: number[];
                };
                "1677315600": {
                    v: number[];
                    c: number[];
                };
                "1677326400": {
                    v: number[];
                    c: number[];
                };
                "1677337200": {
                    v: number[];
                    c: number[];
                };
                "1677348000": {
                    v: number[];
                    c: number[];
                };
                "1677358800": {
                    v: number[];
                    c: number[];
                };
                "1677369600": {
                    v: number[];
                    c: number[];
                };
                "1677380400": {
                    v: number[];
                    c: number[];
                };
                "1677391200": {
                    v: number[];
                    c: number[];
                };
                "1677402000": {
                    v: number[];
                    c: number[];
                };
                "1677412800": {
                    v: number[];
                    c: number[];
                };
                "1677427200": {
                    v: number[];
                    c: number[];
                };
                "1677438000": {
                    v: number[];
                    c: number[];
                };
                "1677448800": {
                    v: number[];
                    c: number[];
                };
                "1677459600": {
                    v: number[];
                    c: number[];
                };
                "1677470400": {
                    v: number[];
                    c: number[];
                };
                "1677481200": {
                    v: number[];
                    c: number[];
                };
                "1677492000": {
                    v: number[];
                    c: number[];
                };
                "1677502800": {
                    v: number[];
                    c: number[];
                };
                "1677513600": {
                    v: number[];
                    c: number[];
                };
                "1677524400": {
                    v: number[];
                    c: number[];
                };
                "1677535200": {
                    v: number[];
                    c: number[];
                };
                "1677546000": {
                    v: number[];
                    c: number[];
                };
                "1677560400": {
                    v: number[];
                    c: number[];
                };
                "1677571200": {
                    v: number[];
                    c: number[];
                };
                "1677582000": {
                    v: number[];
                    c: number[];
                };
                "1677592800": {
                    v: number[];
                    c: number[];
                };
                "1677603600": {
                    v: number[];
                    c: number[];
                };
                "1677614400": {
                    v: number[];
                    c: number[];
                };
                "1677625200": {
                    v: number[];
                    c: number[];
                };
                "1677636000": {
                    v: number[];
                    c: number[];
                };
                "1677646800": {
                    v: number[];
                    c: number[];
                };
                "1677657600": {
                    v: number[];
                    c: number[];
                };
                "1677668400": {
                    v: number[];
                    c: number[];
                };
                "1677679200": {
                    v: number[];
                    c: number[];
                };
                "1677693600": {
                    v: number[];
                    c: number[];
                };
                "1677704400": {
                    v: number[];
                    c: number[];
                };
                "1677715200": {
                    v: number[];
                    c: number[];
                };
                "1677726000": {
                    v: number[];
                    c: number[];
                };
                "1677736800": {
                    v: number[];
                    c: number[];
                };
                "1677747600": {
                    v: number[];
                    c: number[];
                };
                "1677758400": {
                    v: number[];
                    c: number[];
                };
                "1677769200": {
                    v: number[];
                    c: number[];
                };
                "1677780000": {
                    v: number[];
                    c: number[];
                };
                "1677790800": {
                    v: number[];
                    c: number[];
                };
                "1677801600": {
                    v: number[];
                    c: number[];
                };
                "1677812400": {
                    v: number[];
                    c: number[];
                };
                "1677826800": {
                    v: number[];
                    c: number[];
                };
                "1677837600": {
                    v: number[];
                    c: number[];
                };
                "1677848400": {
                    v: number[];
                    c: number[];
                };
                "1677859200": {
                    v: number[];
                    c: number[];
                };
                "1677870000": {
                    v: number[];
                    c: number[];
                };
                "1677880800": {
                    v: number[];
                    c: number[];
                };
                "1677891600": {
                    v: number[];
                    c: number[];
                };
                "1677902400": {
                    v: number[];
                    c: number[];
                };
                "1677913200": {
                    v: number[];
                    c: number[];
                };
                "1677924000": {
                    v: number[];
                    c: number[];
                };
                "1677934800": {
                    v: number[];
                    c: number[];
                };
                "1677945600": {
                    v: number[];
                    c: number[];
                };
                "1677960000": {
                    v: number[];
                    c: number[];
                };
                "1677970800": {
                    v: number[];
                    c: number[];
                };
                "1677981600": {
                    v: number[];
                    c: number[];
                };
                "1677992400": {
                    v: number[];
                    c: number[];
                };
                "1678003200": {
                    v: number[];
                    c: number[];
                };
                "1678014000": {
                    v: number[];
                    c: number[];
                };
                "1678024800": {
                    v: number[];
                    c: number[];
                };
                "1678035600": {
                    v: number[];
                    c: number[];
                };
                "1678046400": {
                    v: number[];
                    c: number[];
                };
                "1678057200": {
                    v: number[];
                    c: number[];
                };
                "1678068000": {
                    v: number[];
                    c: number[];
                };
                "1678078800": {
                    v: number[];
                    c: number[];
                };
                "1678093200": {
                    v: number[];
                    c: number[];
                };
                "1678104000": {
                    v: number[];
                    c: number[];
                };
                "1678114800": {
                    v: number[];
                    c: number[];
                };
                "1678125600": {
                    v: number[];
                    c: number[];
                };
                "1678136400": {
                    v: number[];
                    c: number[];
                };
                "1678147200": {
                    v: number[];
                    c: number[];
                };
                "1678158000": {
                    v: number[];
                    c: number[];
                };
                "1678168800": {
                    v: number[];
                    c: number[];
                };
                "1678179600": {
                    v: number[];
                    c: number[];
                };
                "1678190400": {
                    v: number[];
                    c: number[];
                };
                "1678201200": {
                    v: number[];
                    c: number[];
                };
                "1678212000": {
                    v: number[];
                    c: number[];
                };
                "1678226400": {
                    v: number[];
                    c: number[];
                };
                "1678237200": {
                    v: number[];
                    c: number[];
                };
                "1678248000": {
                    v: number[];
                    c: number[];
                };
                "1678258800": {
                    v: number[];
                    c: number[];
                };
                "1678269600": {
                    v: number[];
                    c: number[];
                };
                "1678280400": {
                    v: number[];
                    c: number[];
                };
                "1678291200": {
                    v: number[];
                    c: number[];
                };
                "1678302000": {
                    v: number[];
                    c: number[];
                };
                "1678312800": {
                    v: number[];
                    c: number[];
                };
                "1678323600": {
                    v: number[];
                    c: number[];
                };
                "1678334400": {
                    v: number[];
                    c: number[];
                };
                "1678345200": {
                    v: number[];
                    c: number[];
                };
                "1678359600": {
                    v: number[];
                    c: number[];
                };
                "1678370400": {
                    v: number[];
                    c: number[];
                };
                "1678381200": {
                    v: number[];
                    c: number[];
                };
                "1678392000": {
                    v: number[];
                    c: number[];
                };
                "1678402800": {
                    v: number[];
                    c: number[];
                };
                "1678413600": {
                    v: number[];
                    c: number[];
                };
                "1678424400": {
                    v: number[];
                    c: number[];
                };
                "1678435200": {
                    v: number[];
                    c: number[];
                };
                "1678446000": {
                    v: number[];
                    c: number[];
                };
                "1678456800": {
                    v: number[];
                    c: number[];
                };
                "1678467600": {
                    v: number[];
                    c: number[];
                };
                "1678482000": {
                    v: number[];
                    c: number[];
                };
                "1678492800": {
                    v: number[];
                    c: number[];
                };
                "1678503600": {
                    v: number[];
                    c: number[];
                };
                "1678514400": {
                    v: number[];
                    c: number[];
                };
                "1678525200": {
                    v: number[];
                    c: number[];
                };
                "1678536000": {
                    v: number[];
                    c: number[];
                };
                "1678546800": {
                    v: number[];
                    c: number[];
                };
                "1678557600": {
                    v: number[];
                    c: number[];
                };
                "1678568400": {
                    v: number[];
                    c: number[];
                };
                "1678579200": {
                    v: number[];
                    c: number[];
                };
                "1678590000": {
                    v: number[];
                    c: number[];
                };
                "1678600800": {
                    v: number[];
                    c: number[];
                };
                "1678615200": {
                    v: number[];
                    c: number[];
                };
                "1678626000": {
                    v: number[];
                    c: number[];
                };
                "1678636800": {
                    v: number[];
                    c: number[];
                };
                "1678647600": {
                    v: number[];
                    c: number[];
                };
                "1678658400": {
                    v: number[];
                    c: number[];
                };
                "1678669200": {
                    v: number[];
                    c: number[];
                };
                "1678680000": {
                    v: number[];
                    c: number[];
                };
                "1678690800": {
                    v: number[];
                    c: number[];
                };
                "1678701600": {
                    v: number[];
                    c: number[];
                };
                "1678712400": {
                    v: number[];
                    c: number[];
                };
                "1678723200": {
                    v: number[];
                    c: number[];
                };
                "1678734000": {
                    v: number[];
                    c: number[];
                };
                "1678748400": {
                    v: number[];
                    c: number[];
                };
                "1678759200": {
                    v: number[];
                    c: number[];
                };
                "1678770000": {
                    v: number[];
                    c: number[];
                };
                "1678780800": {
                    v: number[];
                    c: number[];
                };
                "1678791600": {
                    v: number[];
                    c: number[];
                };
                "1678802400": {
                    v: number[];
                    c: number[];
                };
                "1678813200": {
                    v: number[];
                    c: number[];
                };
                "1678824000": {
                    v: number[];
                    c: number[];
                };
                "1678834800": {
                    v: number[];
                    c: number[];
                };
                "1678845600": {
                    v: number[];
                    c: number[];
                };
                "1678856400": {
                    v: number[];
                    c: number[];
                };
                "1678867200": {
                    v: number[];
                    c: number[];
                };
                "1678881600": {
                    v: number[];
                    c: number[];
                };
                "1678892400": {
                    v: number[];
                    c: number[];
                };
                "1678903200": {
                    v: number[];
                    c: number[];
                };
                "1678914000": {
                    v: number[];
                    c: number[];
                };
                "1678924800": {
                    v: number[];
                    c: number[];
                };
                "1678935600": {
                    v: number[];
                    c: number[];
                };
                "1678946400": {
                    v: number[];
                    c: number[];
                };
                "1678957200": {
                    v: number[];
                    c: number[];
                };
                "1678968000": {
                    v: number[];
                    c: number[];
                };
                "1678978800": {
                    v: number[];
                    c: number[];
                };
                "1678989600": {
                    v: number[];
                    c: number[];
                };
                "1679000400": {
                    v: number[];
                    c: number[];
                };
                "1679014800": {
                    v: number[];
                    c: number[];
                };
                "1679025600": {
                    v: number[];
                    c: number[];
                };
                "1679036400": {
                    v: number[];
                    c: number[];
                };
                "1679047200": {
                    v: number[];
                    c: number[];
                };
                "1679058000": {
                    v: number[];
                    c: number[];
                };
                "1679068800": {
                    v: number[];
                    c: number[];
                };
                "1679079600": {
                    v: number[];
                    c: number[];
                };
                "1679090400": {
                    v: number[];
                    c: number[];
                };
                "1679101200": {
                    v: number[];
                    c: number[];
                };
                "1679112000": {
                    v: number[];
                    c: number[];
                };
                "1679122800": {
                    v: number[];
                    c: number[];
                };
                "1679133600": {
                    v: number[];
                    c: number[];
                };
                "1679148000": {
                    v: number[];
                    c: number[];
                };
                "1679158800": {
                    v: number[];
                    c: number[];
                };
                "1679169600": {
                    v: number[];
                    c: number[];
                };
                "1679180400": {
                    v: number[];
                    c: number[];
                };
                "1679191200": {
                    v: number[];
                    c: number[];
                };
                "1679202000": {
                    v: number[];
                    c: number[];
                };
                "1679212800": {
                    v: number[];
                    c: number[];
                };
                "1679223600": {
                    v: number[];
                    c: number[];
                };
                "1679234400": {
                    v: number[];
                    c: number[];
                };
                "1679245200": {
                    v: number[];
                    c: number[];
                };
                "1679256000": {
                    v: number[];
                    c: number[];
                };
                "1679266800": {
                    v: number[];
                    c: number[];
                };
                "1679281200": {
                    v: number[];
                    c: number[];
                };
                "1679292000": {
                    v: number[];
                    c: number[];
                };
                "1679302800": {
                    v: number[];
                    c: number[];
                };
                "1679313600": {
                    v: number[];
                    c: number[];
                };
                "1679324400": {
                    v: number[];
                    c: number[];
                };
                "1679335200": {
                    v: number[];
                    c: number[];
                };
                "1679346000": {
                    v: number[];
                    c: number[];
                };
                "1679356800": {
                    v: number[];
                    c: number[];
                };
                "1679367600": {
                    v: number[];
                    c: number[];
                };
                "1679378400": {
                    v: number[];
                    c: number[];
                };
                "1679389200": {
                    v: number[];
                    c: number[];
                };
                "1679400000": {
                    v: number[];
                    c: number[];
                };
                "1679414400": {
                    v: number[];
                    c: number[];
                };
                "1679425200": {
                    v: number[];
                    c: number[];
                };
                "1679436000": {
                    v: number[];
                    c: number[];
                };
                "1679446800": {
                    v: number[];
                    c: number[];
                };
                "1679457600": {
                    v: number[];
                    c: number[];
                };
                "1679468400": {
                    v: number[];
                    c: number[];
                };
                "1679479200": {
                    v: number[];
                    c: number[];
                };
                "1679490000": {
                    v: number[];
                    c: number[];
                };
                "1679500800": {
                    v: number[];
                    c: number[];
                };
                "1679511600": {
                    v: number[];
                    c: number[];
                };
                "1679522400": {
                    v: number[];
                    c: number[];
                };
                "1679536800": {
                    v: number[];
                    c: number[];
                };
                "1679547600": {
                    v: number[];
                    c: number[];
                };
                "1679558400": {
                    v: number[];
                    c: number[];
                };
                "1679569200": {
                    v: number[];
                    c: number[];
                };
                "1679580000": {
                    v: number[];
                    c: number[];
                };
                "1679590800": {
                    v: number[];
                    c: number[];
                };
                "1679601600": {
                    v: number[];
                    c: number[];
                };
                "1679612400": {
                    v: number[];
                    c: number[];
                };
                "1679623200": {
                    v: number[];
                    c: number[];
                };
                "1679634000": {
                    v: number[];
                    c: number[];
                };
                "1679644800": {
                    v: number[];
                    c: number[];
                };
                "1679655600": {
                    v: number[];
                    c: number[];
                };
                "1679670000": {
                    v: number[];
                    c: number[];
                };
                "1679680800": {
                    v: number[];
                    c: number[];
                };
                "1679691600": {
                    v: number[];
                    c: number[];
                };
                "1679702400": {
                    v: number[];
                    c: number[];
                };
                "1679713200": {
                    v: number[];
                    c: number[];
                };
                "1679724000": {
                    v: number[];
                    c: number[];
                };
                "1679734800": {
                    v: number[];
                    c: number[];
                };
                "1679745600": {
                    v: number[];
                    c: number[];
                };
                "1679756400": {
                    v: number[];
                    c: number[];
                };
                "1679767200": {
                    v: number[];
                    c: number[];
                };
                "1679778000": {
                    v: number[];
                    c: number[];
                };
                "1679788800": {
                    v: number[];
                    c: number[];
                };
                "1679803200": {
                    v: number[];
                    c: number[];
                };
                "1679814000": {
                    v: number[];
                    c: number[];
                };
                "1679824800": {
                    v: number[];
                    c: number[];
                };
                "1679835600": {
                    v: number[];
                    c: number[];
                };
                "1679846400": {
                    v: number[];
                    c: number[];
                };
                "1679857200": {
                    v: number[];
                    c: number[];
                };
                "1679868000": {
                    v: number[];
                    c: number[];
                };
                "1679878800": {
                    v: number[];
                    c: number[];
                };
                "1679889600": {
                    v: number[];
                    c: number[];
                };
                "1679900400": {
                    v: number[];
                    c: number[];
                };
                "1679911200": {
                    v: number[];
                    c: number[];
                };
                "1679922000": {
                    v: number[];
                    c: number[];
                };
                "1679936400": {
                    v: number[];
                    c: number[];
                };
                "1679947200": {
                    v: number[];
                    c: number[];
                };
                "1679958000": {
                    v: number[];
                    c: number[];
                };
                "1679968800": {
                    v: number[];
                    c: number[];
                };
                "1679979600": {
                    v: number[];
                    c: number[];
                };
                "1679990400": {
                    v: number[];
                    c: number[];
                };
                "1680001200": {
                    v: number[];
                    c: number[];
                };
                "1680012000": {
                    v: number[];
                    c: number[];
                };
                "1680022800": {
                    v: number[];
                    c: number[];
                };
                "1680033600": {
                    v: number[];
                    c: number[];
                };
                "1680044400": {
                    v: number[];
                    c: number[];
                };
                "1680055200": {
                    v: number[];
                    c: number[];
                };
                "1680069600": {
                    v: number[];
                    c: number[];
                };
                "1680080400": {
                    v: number[];
                    c: number[];
                };
                "1680091200": {
                    v: number[];
                    c: number[];
                };
                "1680102000": {
                    v: number[];
                    c: number[];
                };
                "1680112800": {
                    v: number[];
                    c: number[];
                };
                "1680123600": {
                    v: number[];
                    c: number[];
                };
                "1680134400": {
                    v: number[];
                    c: number[];
                };
                "1680145200": {
                    v: number[];
                    c: number[];
                };
                "1680156000": {
                    v: number[];
                    c: number[];
                };
                "1680166800": {
                    v: number[];
                    c: number[];
                };
                "1680177600": {
                    v: number[];
                    c: number[];
                };
                "1680188400": {
                    v: number[];
                    c: number[];
                };
                "1680202800": {
                    v: number[];
                    c: number[];
                };
                "1680213600": {
                    v: number[];
                    c: number[];
                };
                "1680224400": {
                    v: number[];
                    c: number[];
                };
                "1680235200": {
                    v: number[];
                    c: number[];
                };
                "1680246000": {
                    v: number[];
                    c: number[];
                };
                "1680256800": {
                    v: number[];
                    c: number[];
                };
                "1680267600": {
                    v: number[];
                    c: number[];
                };
                "1680278400": {
                    v: number[];
                    c: number[];
                };
                "1680289200": {
                    v: number[];
                    c: number[];
                };
                "1680300000": {
                    v: number[];
                    c: number[];
                };
                "1680310800": {
                    v: number[];
                    c: number[];
                };
                "1680321600": {
                    v: number[];
                    c: number[];
                };
                "1680336000": {
                    v: number[];
                    c: number[];
                };
                "1680346800": {
                    v: number[];
                    c: number[];
                };
                "1680357600": {
                    v: number[];
                    c: number[];
                };
                "1680368400": {
                    v: number[];
                    c: number[];
                };
                "1680379200": {
                    v: number[];
                    c: number[];
                };
                "1680390000": {
                    v: number[];
                    c: number[];
                };
                "1680400800": {
                    v: number[];
                    c: number[];
                };
                "1680411600": {
                    v: number[];
                    c: number[];
                };
                "1680422400": {
                    v: number[];
                    c: number[];
                };
                "1680433200": {
                    v: number[];
                    c: number[];
                };
                "1680444000": {
                    v: number[];
                    c: number[];
                };
                "1680454800": {
                    v: number[];
                    c: number[];
                };
                "1680469200": {
                    v: number[];
                    c: number[];
                };
                "1680480000": {
                    v: number[];
                    c: number[];
                };
                "1680490800": {
                    v: number[];
                    c: number[];
                };
                "1680501600": {
                    v: number[];
                    c: number[];
                };
                "1680512400": {
                    v: number[];
                    c: number[];
                };
                "1680523200": {
                    v: number[];
                    c: number[];
                };
                "1680534000": {
                    v: number[];
                    c: number[];
                };
                "1680544800": {
                    v: number[];
                    c: number[];
                };
                "1680555600": {
                    v: number[];
                    c: number[];
                };
                "1680566400": {
                    v: number[];
                    c: number[];
                };
                "1680578519": {
                    v: number[];
                };
            };
        };
        status: {
            timestamp: string;
            error_code: string;
            error_message: string;
            elapsed: string;
            credit_count: number;
        };
    };
}
/// <amd-module name="@scom/scom-trading-chart/store/dummy/year.json.ts" />
declare module "@scom/scom-trading-chart/store/dummy/year.json.ts" {
    export const year: {
        data: {
            points: {
                "1649116800": {
                    v: number[];
                    c: number[];
                };
                "1649203200": {
                    v: number[];
                    c: number[];
                };
                "1649289600": {
                    v: number[];
                    c: number[];
                };
                "1649376000": {
                    v: number[];
                    c: number[];
                };
                "1649462400": {
                    v: number[];
                    c: number[];
                };
                "1649548800": {
                    v: number[];
                    c: number[];
                };
                "1649635200": {
                    v: number[];
                    c: number[];
                };
                "1649721600": {
                    v: number[];
                    c: number[];
                };
                "1649808000": {
                    v: number[];
                    c: number[];
                };
                "1649894400": {
                    v: number[];
                    c: number[];
                };
                "1649980800": {
                    v: number[];
                    c: number[];
                };
                "1650067200": {
                    v: number[];
                    c: number[];
                };
                "1650153600": {
                    v: number[];
                    c: number[];
                };
                "1650240000": {
                    v: number[];
                    c: number[];
                };
                "1650326400": {
                    v: number[];
                    c: number[];
                };
                "1650412800": {
                    v: number[];
                    c: number[];
                };
                "1650499200": {
                    v: number[];
                    c: number[];
                };
                "1650585600": {
                    v: number[];
                    c: number[];
                };
                "1650672000": {
                    v: number[];
                    c: number[];
                };
                "1650758400": {
                    v: number[];
                    c: number[];
                };
                "1650844800": {
                    v: number[];
                    c: number[];
                };
                "1650931200": {
                    v: number[];
                    c: number[];
                };
                "1651017600": {
                    v: number[];
                    c: number[];
                };
                "1651104000": {
                    v: number[];
                    c: number[];
                };
                "1651190400": {
                    v: number[];
                    c: number[];
                };
                "1651276800": {
                    v: number[];
                    c: number[];
                };
                "1651363200": {
                    v: number[];
                    c: number[];
                };
                "1651449600": {
                    v: number[];
                    c: number[];
                };
                "1651536000": {
                    v: number[];
                    c: number[];
                };
                "1651622400": {
                    v: number[];
                    c: number[];
                };
                "1651708800": {
                    v: number[];
                    c: number[];
                };
                "1651795200": {
                    v: number[];
                    c: number[];
                };
                "1651881600": {
                    v: number[];
                    c: number[];
                };
                "1651968000": {
                    v: number[];
                    c: number[];
                };
                "1652054400": {
                    v: number[];
                    c: number[];
                };
                "1652140800": {
                    v: number[];
                    c: number[];
                };
                "1652227200": {
                    v: number[];
                    c: number[];
                };
                "1652313600": {
                    v: number[];
                    c: number[];
                };
                "1652400000": {
                    v: number[];
                    c: number[];
                };
                "1652486400": {
                    v: number[];
                    c: number[];
                };
                "1652572800": {
                    v: number[];
                    c: number[];
                };
                "1652659200": {
                    v: number[];
                    c: number[];
                };
                "1652745600": {
                    v: number[];
                    c: number[];
                };
                "1652832000": {
                    v: number[];
                    c: number[];
                };
                "1652918400": {
                    v: number[];
                    c: number[];
                };
                "1653004800": {
                    v: number[];
                    c: number[];
                };
                "1653091200": {
                    v: number[];
                    c: number[];
                };
                "1653177600": {
                    v: number[];
                    c: number[];
                };
                "1653264000": {
                    v: number[];
                    c: number[];
                };
                "1653350400": {
                    v: number[];
                    c: number[];
                };
                "1653436800": {
                    v: number[];
                    c: number[];
                };
                "1653523200": {
                    v: number[];
                    c: number[];
                };
                "1653609600": {
                    v: number[];
                    c: number[];
                };
                "1653696000": {
                    v: number[];
                    c: number[];
                };
                "1653782400": {
                    v: number[];
                    c: number[];
                };
                "1653868800": {
                    v: number[];
                    c: number[];
                };
                "1653955200": {
                    v: number[];
                    c: number[];
                };
                "1654041600": {
                    v: number[];
                    c: number[];
                };
                "1654128000": {
                    v: number[];
                    c: number[];
                };
                "1654214400": {
                    v: number[];
                    c: number[];
                };
                "1654300800": {
                    v: number[];
                    c: number[];
                };
                "1654387200": {
                    v: number[];
                    c: number[];
                };
                "1654473600": {
                    v: number[];
                    c: number[];
                };
                "1654560000": {
                    v: number[];
                    c: number[];
                };
                "1654646400": {
                    v: number[];
                    c: number[];
                };
                "1654732800": {
                    v: number[];
                    c: number[];
                };
                "1654819200": {
                    v: number[];
                    c: number[];
                };
                "1654905600": {
                    v: number[];
                    c: number[];
                };
                "1654992000": {
                    v: number[];
                    c: number[];
                };
                "1655078400": {
                    v: number[];
                    c: number[];
                };
                "1655164800": {
                    v: number[];
                    c: number[];
                };
                "1655251200": {
                    v: number[];
                    c: number[];
                };
                "1655337600": {
                    v: number[];
                    c: number[];
                };
                "1655424000": {
                    v: number[];
                    c: number[];
                };
                "1655510400": {
                    v: number[];
                    c: number[];
                };
                "1655596800": {
                    v: number[];
                    c: number[];
                };
                "1655683200": {
                    v: number[];
                    c: number[];
                };
                "1655769600": {
                    v: number[];
                    c: number[];
                };
                "1655856000": {
                    v: number[];
                    c: number[];
                };
                "1655942400": {
                    v: number[];
                    c: number[];
                };
                "1656028800": {
                    v: number[];
                    c: number[];
                };
                "1656115200": {
                    v: number[];
                    c: number[];
                };
                "1656201600": {
                    v: number[];
                    c: number[];
                };
                "1656288000": {
                    v: number[];
                    c: number[];
                };
                "1656374400": {
                    v: number[];
                    c: number[];
                };
                "1656460800": {
                    v: number[];
                    c: number[];
                };
                "1656547200": {
                    v: number[];
                    c: number[];
                };
                "1656633600": {
                    v: number[];
                    c: number[];
                };
                "1656720000": {
                    v: number[];
                    c: number[];
                };
                "1656806400": {
                    v: number[];
                    c: number[];
                };
                "1656892800": {
                    v: number[];
                    c: number[];
                };
                "1656979200": {
                    v: number[];
                    c: number[];
                };
                "1657065600": {
                    v: number[];
                    c: number[];
                };
                "1657152000": {
                    v: number[];
                    c: number[];
                };
                "1657238400": {
                    v: number[];
                    c: number[];
                };
                "1657324800": {
                    v: number[];
                    c: number[];
                };
                "1657411200": {
                    v: number[];
                    c: number[];
                };
                "1657497600": {
                    v: number[];
                    c: number[];
                };
                "1657584000": {
                    v: number[];
                    c: number[];
                };
                "1657670400": {
                    v: number[];
                    c: number[];
                };
                "1657756800": {
                    v: number[];
                    c: number[];
                };
                "1657843200": {
                    v: number[];
                    c: number[];
                };
                "1657929600": {
                    v: number[];
                    c: number[];
                };
                "1658016000": {
                    v: number[];
                    c: number[];
                };
                "1658102400": {
                    v: number[];
                    c: number[];
                };
                "1658188800": {
                    v: number[];
                    c: number[];
                };
                "1658275200": {
                    v: number[];
                    c: number[];
                };
                "1658361600": {
                    v: number[];
                    c: number[];
                };
                "1658448000": {
                    v: number[];
                    c: number[];
                };
                "1658534400": {
                    v: number[];
                    c: number[];
                };
                "1658620800": {
                    v: number[];
                    c: number[];
                };
                "1658707200": {
                    v: number[];
                    c: number[];
                };
                "1658793600": {
                    v: number[];
                    c: number[];
                };
                "1658880000": {
                    v: number[];
                    c: number[];
                };
                "1658966400": {
                    v: number[];
                    c: number[];
                };
                "1659052800": {
                    v: number[];
                    c: number[];
                };
                "1659139200": {
                    v: number[];
                    c: number[];
                };
                "1659225600": {
                    v: number[];
                    c: number[];
                };
                "1659312000": {
                    v: number[];
                    c: number[];
                };
                "1659398400": {
                    v: number[];
                    c: number[];
                };
                "1659484800": {
                    v: number[];
                    c: number[];
                };
                "1659571200": {
                    v: number[];
                    c: number[];
                };
                "1659657600": {
                    v: number[];
                    c: number[];
                };
                "1659744000": {
                    v: number[];
                    c: number[];
                };
                "1659830400": {
                    v: number[];
                    c: number[];
                };
                "1659916800": {
                    v: number[];
                    c: number[];
                };
                "1660003200": {
                    v: number[];
                    c: number[];
                };
                "1660089600": {
                    v: number[];
                    c: number[];
                };
                "1660176000": {
                    v: number[];
                    c: number[];
                };
                "1660262400": {
                    v: number[];
                    c: number[];
                };
                "1660348800": {
                    v: number[];
                    c: number[];
                };
                "1660435200": {
                    v: number[];
                    c: number[];
                };
                "1660521600": {
                    v: number[];
                    c: number[];
                };
                "1660608000": {
                    v: number[];
                    c: number[];
                };
                "1660694400": {
                    v: number[];
                    c: number[];
                };
                "1660780800": {
                    v: number[];
                    c: number[];
                };
                "1660867200": {
                    v: number[];
                    c: number[];
                };
                "1660953600": {
                    v: number[];
                    c: number[];
                };
                "1661040000": {
                    v: number[];
                    c: number[];
                };
                "1661126400": {
                    v: number[];
                    c: number[];
                };
                "1661212800": {
                    v: number[];
                    c: number[];
                };
                "1661299200": {
                    v: number[];
                    c: number[];
                };
                "1661385600": {
                    v: number[];
                    c: number[];
                };
                "1661472000": {
                    v: number[];
                    c: number[];
                };
                "1661558400": {
                    v: number[];
                    c: number[];
                };
                "1661644800": {
                    v: number[];
                    c: number[];
                };
                "1661731200": {
                    v: number[];
                    c: number[];
                };
                "1661817600": {
                    v: number[];
                    c: number[];
                };
                "1661904000": {
                    v: number[];
                    c: number[];
                };
                "1661990400": {
                    v: number[];
                    c: number[];
                };
                "1662076800": {
                    v: number[];
                    c: number[];
                };
                "1662163200": {
                    v: number[];
                    c: number[];
                };
                "1662249600": {
                    v: number[];
                    c: number[];
                };
                "1662336000": {
                    v: number[];
                    c: number[];
                };
                "1662422400": {
                    v: number[];
                    c: number[];
                };
                "1662508800": {
                    v: number[];
                    c: number[];
                };
                "1662595200": {
                    v: number[];
                    c: number[];
                };
                "1662681600": {
                    v: number[];
                    c: number[];
                };
                "1662768000": {
                    v: number[];
                    c: number[];
                };
                "1662854400": {
                    v: number[];
                    c: number[];
                };
                "1662940800": {
                    v: number[];
                    c: number[];
                };
                "1663027200": {
                    v: number[];
                    c: number[];
                };
                "1663113600": {
                    v: number[];
                    c: number[];
                };
                "1663200000": {
                    v: number[];
                    c: number[];
                };
                "1663286400": {
                    v: number[];
                    c: number[];
                };
                "1663372800": {
                    v: number[];
                    c: number[];
                };
                "1663459200": {
                    v: number[];
                    c: number[];
                };
                "1663545600": {
                    v: number[];
                    c: number[];
                };
                "1663632000": {
                    v: number[];
                    c: number[];
                };
                "1663718400": {
                    v: number[];
                    c: number[];
                };
                "1663804800": {
                    v: number[];
                    c: number[];
                };
                "1663891200": {
                    v: number[];
                    c: number[];
                };
                "1663977600": {
                    v: number[];
                    c: number[];
                };
                "1664064000": {
                    v: number[];
                    c: number[];
                };
                "1664150400": {
                    v: number[];
                    c: number[];
                };
                "1664236800": {
                    v: number[];
                    c: number[];
                };
                "1664323200": {
                    v: number[];
                    c: number[];
                };
                "1664409600": {
                    v: number[];
                    c: number[];
                };
                "1664496000": {
                    v: number[];
                    c: number[];
                };
                "1664582400": {
                    v: number[];
                    c: number[];
                };
                "1664668800": {
                    v: number[];
                    c: number[];
                };
                "1664755200": {
                    v: number[];
                    c: number[];
                };
                "1664841600": {
                    v: number[];
                    c: number[];
                };
                "1664928000": {
                    v: number[];
                    c: number[];
                };
                "1665014400": {
                    v: number[];
                    c: number[];
                };
                "1665100800": {
                    v: number[];
                    c: number[];
                };
                "1665187200": {
                    v: number[];
                    c: number[];
                };
                "1665273600": {
                    v: number[];
                    c: number[];
                };
                "1665360000": {
                    v: number[];
                    c: number[];
                };
                "1665446400": {
                    v: number[];
                    c: number[];
                };
                "1665532800": {
                    v: number[];
                    c: number[];
                };
                "1665619200": {
                    v: number[];
                    c: number[];
                };
                "1665705600": {
                    v: number[];
                    c: number[];
                };
                "1665792000": {
                    v: number[];
                    c: number[];
                };
                "1665878400": {
                    v: number[];
                    c: number[];
                };
                "1665964800": {
                    v: number[];
                    c: number[];
                };
                "1666051200": {
                    v: number[];
                    c: number[];
                };
                "1666137600": {
                    v: number[];
                    c: number[];
                };
                "1666224000": {
                    v: number[];
                    c: number[];
                };
                "1666310400": {
                    v: number[];
                    c: number[];
                };
                "1666396800": {
                    v: number[];
                    c: number[];
                };
                "1666483200": {
                    v: number[];
                    c: number[];
                };
                "1666569600": {
                    v: number[];
                    c: number[];
                };
                "1666656000": {
                    v: number[];
                    c: number[];
                };
                "1666742400": {
                    v: number[];
                    c: number[];
                };
                "1666828800": {
                    v: number[];
                    c: number[];
                };
                "1666915200": {
                    v: number[];
                    c: number[];
                };
                "1667001600": {
                    v: number[];
                    c: number[];
                };
                "1667088000": {
                    v: number[];
                    c: number[];
                };
                "1667174400": {
                    v: number[];
                    c: number[];
                };
                "1667260800": {
                    v: number[];
                    c: number[];
                };
                "1667347200": {
                    v: number[];
                    c: number[];
                };
                "1667433600": {
                    v: number[];
                    c: number[];
                };
                "1667520000": {
                    v: number[];
                    c: number[];
                };
                "1667606400": {
                    v: number[];
                    c: number[];
                };
                "1667692800": {
                    v: number[];
                    c: number[];
                };
                "1667779200": {
                    v: number[];
                    c: number[];
                };
                "1667865600": {
                    v: number[];
                    c: number[];
                };
                "1667952000": {
                    v: number[];
                    c: number[];
                };
                "1668038400": {
                    v: number[];
                    c: number[];
                };
                "1668124800": {
                    v: number[];
                    c: number[];
                };
                "1668211200": {
                    v: number[];
                    c: number[];
                };
                "1668297600": {
                    v: number[];
                    c: number[];
                };
                "1668384000": {
                    v: number[];
                    c: number[];
                };
                "1668470400": {
                    v: number[];
                    c: number[];
                };
                "1668556800": {
                    v: number[];
                    c: number[];
                };
                "1668643200": {
                    v: number[];
                    c: number[];
                };
                "1668729600": {
                    v: number[];
                    c: number[];
                };
                "1668816000": {
                    v: number[];
                    c: number[];
                };
                "1668902400": {
                    v: number[];
                    c: number[];
                };
                "1668988800": {
                    v: number[];
                    c: number[];
                };
                "1669075200": {
                    v: number[];
                    c: number[];
                };
                "1669161600": {
                    v: number[];
                    c: number[];
                };
                "1669248000": {
                    v: number[];
                    c: number[];
                };
                "1669334400": {
                    v: number[];
                    c: number[];
                };
                "1669420800": {
                    v: number[];
                    c: number[];
                };
                "1669507200": {
                    v: number[];
                    c: number[];
                };
                "1669593600": {
                    v: number[];
                    c: number[];
                };
                "1669680000": {
                    v: number[];
                    c: number[];
                };
                "1669766400": {
                    v: number[];
                    c: number[];
                };
                "1669852800": {
                    v: number[];
                    c: number[];
                };
                "1669939200": {
                    v: number[];
                    c: number[];
                };
                "1670025600": {
                    v: number[];
                    c: number[];
                };
                "1670112000": {
                    v: number[];
                    c: number[];
                };
                "1670198400": {
                    v: number[];
                    c: number[];
                };
                "1670284800": {
                    v: number[];
                    c: number[];
                };
                "1670371200": {
                    v: number[];
                    c: number[];
                };
                "1670457600": {
                    v: number[];
                    c: number[];
                };
                "1670544000": {
                    v: number[];
                    c: number[];
                };
                "1670630400": {
                    v: number[];
                    c: number[];
                };
                "1670716800": {
                    v: number[];
                    c: number[];
                };
                "1670803200": {
                    v: number[];
                    c: number[];
                };
                "1670889600": {
                    v: number[];
                    c: number[];
                };
                "1670976000": {
                    v: number[];
                    c: number[];
                };
                "1671062400": {
                    v: number[];
                    c: number[];
                };
                "1671148800": {
                    v: number[];
                    c: number[];
                };
                "1671235200": {
                    v: number[];
                    c: number[];
                };
                "1671321600": {
                    v: number[];
                    c: number[];
                };
                "1671408000": {
                    v: number[];
                    c: number[];
                };
                "1671494400": {
                    v: number[];
                    c: number[];
                };
                "1671580800": {
                    v: number[];
                    c: number[];
                };
                "1671667200": {
                    v: number[];
                    c: number[];
                };
                "1671753600": {
                    v: number[];
                    c: number[];
                };
                "1671840000": {
                    v: number[];
                    c: number[];
                };
                "1671926400": {
                    v: number[];
                    c: number[];
                };
                "1672012800": {
                    v: number[];
                    c: number[];
                };
                "1672099200": {
                    v: number[];
                    c: number[];
                };
                "1672185600": {
                    v: number[];
                    c: number[];
                };
                "1672272000": {
                    v: number[];
                    c: number[];
                };
                "1672358400": {
                    v: number[];
                    c: number[];
                };
                "1672444800": {
                    v: number[];
                    c: number[];
                };
                "1672531200": {
                    v: number[];
                    c: number[];
                };
                "1672617600": {
                    v: number[];
                    c: number[];
                };
                "1672704000": {
                    v: number[];
                    c: number[];
                };
                "1672790400": {
                    v: number[];
                    c: number[];
                };
                "1672876800": {
                    v: number[];
                    c: number[];
                };
                "1672963200": {
                    v: number[];
                    c: number[];
                };
                "1673049600": {
                    v: number[];
                    c: number[];
                };
                "1673136000": {
                    v: number[];
                    c: number[];
                };
                "1673222400": {
                    v: number[];
                    c: number[];
                };
                "1673308800": {
                    v: number[];
                    c: number[];
                };
                "1673395200": {
                    v: number[];
                    c: number[];
                };
                "1673481600": {
                    v: number[];
                    c: number[];
                };
                "1673568000": {
                    v: number[];
                    c: number[];
                };
                "1673654400": {
                    v: number[];
                    c: number[];
                };
                "1673740800": {
                    v: number[];
                    c: number[];
                };
                "1673827200": {
                    v: number[];
                    c: number[];
                };
                "1673913600": {
                    v: number[];
                    c: number[];
                };
                "1674000000": {
                    v: number[];
                    c: number[];
                };
                "1674086400": {
                    v: number[];
                    c: number[];
                };
                "1674172800": {
                    v: number[];
                    c: number[];
                };
                "1674259200": {
                    v: number[];
                    c: number[];
                };
                "1674345600": {
                    v: number[];
                    c: number[];
                };
                "1674432000": {
                    v: number[];
                    c: number[];
                };
                "1674518400": {
                    v: number[];
                    c: number[];
                };
                "1674604800": {
                    v: number[];
                    c: number[];
                };
                "1674691200": {
                    v: number[];
                    c: number[];
                };
                "1674777600": {
                    v: number[];
                    c: number[];
                };
                "1674864000": {
                    v: number[];
                    c: number[];
                };
                "1674950400": {
                    v: number[];
                    c: number[];
                };
                "1675036800": {
                    v: number[];
                    c: number[];
                };
                "1675123200": {
                    v: number[];
                    c: number[];
                };
                "1675209600": {
                    v: number[];
                    c: number[];
                };
                "1675296000": {
                    v: number[];
                    c: number[];
                };
                "1675382400": {
                    v: number[];
                    c: number[];
                };
                "1675468800": {
                    v: number[];
                    c: number[];
                };
                "1675555200": {
                    v: number[];
                    c: number[];
                };
                "1675641600": {
                    v: number[];
                    c: number[];
                };
                "1675728000": {
                    v: number[];
                    c: number[];
                };
                "1675814400": {
                    v: number[];
                    c: number[];
                };
                "1675900800": {
                    v: number[];
                    c: number[];
                };
                "1675987200": {
                    v: number[];
                    c: number[];
                };
                "1676073600": {
                    v: number[];
                    c: number[];
                };
                "1676160000": {
                    v: number[];
                    c: number[];
                };
                "1676246400": {
                    v: number[];
                    c: number[];
                };
                "1676332800": {
                    v: number[];
                    c: number[];
                };
                "1676419200": {
                    v: number[];
                    c: number[];
                };
                "1676505600": {
                    v: number[];
                    c: number[];
                };
                "1676592000": {
                    v: number[];
                    c: number[];
                };
                "1676678400": {
                    v: number[];
                    c: number[];
                };
                "1676764800": {
                    v: number[];
                    c: number[];
                };
                "1676851200": {
                    v: number[];
                    c: number[];
                };
                "1676937600": {
                    v: number[];
                    c: number[];
                };
                "1677024000": {
                    v: number[];
                    c: number[];
                };
                "1677110400": {
                    v: number[];
                    c: number[];
                };
                "1677196800": {
                    v: number[];
                    c: number[];
                };
                "1677283200": {
                    v: number[];
                    c: number[];
                };
                "1677369600": {
                    v: number[];
                    c: number[];
                };
                "1677456000": {
                    v: number[];
                    c: number[];
                };
                "1677542400": {
                    v: number[];
                    c: number[];
                };
                "1677628800": {
                    v: number[];
                    c: number[];
                };
                "1677715200": {
                    v: number[];
                    c: number[];
                };
                "1677801600": {
                    v: number[];
                    c: number[];
                };
                "1677888000": {
                    v: number[];
                    c: number[];
                };
                "1677974400": {
                    v: number[];
                    c: number[];
                };
                "1678060800": {
                    v: number[];
                    c: number[];
                };
                "1678147200": {
                    v: number[];
                    c: number[];
                };
                "1678233600": {
                    v: number[];
                    c: number[];
                };
                "1678320000": {
                    v: number[];
                    c: number[];
                };
                "1678406400": {
                    v: number[];
                    c: number[];
                };
                "1678492800": {
                    v: number[];
                    c: number[];
                };
                "1678579200": {
                    v: number[];
                    c: number[];
                };
                "1678665600": {
                    v: number[];
                    c: number[];
                };
                "1678752000": {
                    v: number[];
                    c: number[];
                };
                "1678838400": {
                    v: number[];
                    c: number[];
                };
                "1678924800": {
                    v: number[];
                    c: number[];
                };
                "1679011200": {
                    v: number[];
                    c: number[];
                };
                "1679097600": {
                    v: number[];
                    c: number[];
                };
                "1679184000": {
                    v: number[];
                    c: number[];
                };
                "1679270400": {
                    v: number[];
                    c: number[];
                };
                "1679356800": {
                    v: number[];
                    c: number[];
                };
                "1679443200": {
                    v: number[];
                    c: number[];
                };
                "1679529600": {
                    v: number[];
                    c: number[];
                };
                "1679616000": {
                    v: number[];
                    c: number[];
                };
                "1679702400": {
                    v: number[];
                    c: number[];
                };
                "1679788800": {
                    v: number[];
                    c: number[];
                };
                "1679875200": {
                    v: number[];
                    c: number[];
                };
                "1679961600": {
                    v: number[];
                    c: number[];
                };
                "1680048000": {
                    v: number[];
                    c: number[];
                };
                "1680134400": {
                    v: number[];
                    c: number[];
                };
                "1680220800": {
                    v: number[];
                    c: number[];
                };
                "1680307200": {
                    v: number[];
                    c: number[];
                };
                "1680393600": {
                    v: number[];
                    c: number[];
                };
                "1680480000": {
                    v: number[];
                    c: number[];
                };
                "1680578629": {
                    v: number[];
                };
            };
        };
        status: {
            timestamp: string;
            error_code: string;
            error_message: string;
            elapsed: string;
            credit_count: number;
        };
    };
}
/// <amd-module name="@scom/scom-trading-chart/store/dummy/all.json.ts" />
declare module "@scom/scom-trading-chart/store/dummy/all.json.ts" {
    export const all: {
        data: {
            points: {
                "1278979200": {
                    v: number[];
                    c: number[];
                };
                "1279584000": {
                    v: number[];
                    c: number[];
                };
                "1280188800": {
                    v: number[];
                    c: number[];
                };
                "1280707200": {
                    v: number[];
                    c: number[];
                };
                "1281312000": {
                    v: number[];
                    c: number[];
                };
                "1281916800": {
                    v: number[];
                    c: number[];
                };
                "1282435200": {
                    v: number[];
                    c: number[];
                };
                "1283040000": {
                    v: number[];
                    c: number[];
                };
                "1283644800": {
                    v: number[];
                    c: number[];
                };
                "1284163200": {
                    v: number[];
                    c: number[];
                };
                "1284768000": {
                    v: number[];
                    c: number[];
                };
                "1285372800": {
                    v: number[];
                    c: number[];
                };
                "1285891200": {
                    v: number[];
                    c: number[];
                };
                "1286496000": {
                    v: number[];
                    c: number[];
                };
                "1287014400": {
                    v: number[];
                    c: number[];
                };
                "1287619200": {
                    v: number[];
                    c: number[];
                };
                "1288224000": {
                    v: number[];
                    c: number[];
                };
                "1288742400": {
                    v: number[];
                    c: number[];
                };
                "1289347200": {
                    v: number[];
                    c: number[];
                };
                "1289952000": {
                    v: number[];
                    c: number[];
                };
                "1290470400": {
                    v: number[];
                    c: number[];
                };
                "1291075200": {
                    v: number[];
                    c: number[];
                };
                "1291680000": {
                    v: number[];
                    c: number[];
                };
                "1292198400": {
                    v: number[];
                    c: number[];
                };
                "1292803200": {
                    v: number[];
                    c: number[];
                };
                "1293321600": {
                    v: number[];
                    c: number[];
                };
                "1293926400": {
                    v: number[];
                    c: number[];
                };
                "1294531200": {
                    v: number[];
                    c: number[];
                };
                "1295049600": {
                    v: number[];
                    c: number[];
                };
                "1295654400": {
                    v: number[];
                    c: number[];
                };
                "1296259200": {
                    v: number[];
                    c: number[];
                };
                "1296777600": {
                    v: number[];
                    c: number[];
                };
                "1297382400": {
                    v: number[];
                    c: number[];
                };
                "1297987200": {
                    v: number[];
                    c: number[];
                };
                "1298505600": {
                    v: number[];
                    c: number[];
                };
                "1299110400": {
                    v: number[];
                    c: number[];
                };
                "1299715200": {
                    v: number[];
                    c: number[];
                };
                "1300233600": {
                    v: number[];
                    c: number[];
                };
                "1300838400": {
                    v: number[];
                    c: number[];
                };
                "1301356800": {
                    v: number[];
                    c: number[];
                };
                "1301961600": {
                    v: number[];
                    c: number[];
                };
                "1302566400": {
                    v: number[];
                    c: number[];
                };
                "1303084800": {
                    v: number[];
                    c: number[];
                };
                "1303689600": {
                    v: number[];
                    c: number[];
                };
                "1304294400": {
                    v: number[];
                    c: number[];
                };
                "1304812800": {
                    v: number[];
                    c: number[];
                };
                "1305417600": {
                    v: number[];
                    c: number[];
                };
                "1306022400": {
                    v: number[];
                    c: number[];
                };
                "1306540800": {
                    v: number[];
                    c: number[];
                };
                "1307145600": {
                    v: number[];
                    c: number[];
                };
                "1307664000": {
                    v: number[];
                    c: number[];
                };
                "1308268800": {
                    v: number[];
                    c: number[];
                };
                "1308873600": {
                    v: number[];
                    c: number[];
                };
                "1309392000": {
                    v: number[];
                    c: number[];
                };
                "1309996800": {
                    v: number[];
                    c: number[];
                };
                "1310601600": {
                    v: number[];
                    c: number[];
                };
                "1311120000": {
                    v: number[];
                    c: number[];
                };
                "1311724800": {
                    v: number[];
                    c: number[];
                };
                "1312329600": {
                    v: number[];
                    c: number[];
                };
                "1312848000": {
                    v: number[];
                    c: number[];
                };
                "1313452800": {
                    v: number[];
                    c: number[];
                };
                "1314057600": {
                    v: number[];
                    c: number[];
                };
                "1314576000": {
                    v: number[];
                    c: number[];
                };
                "1315180800": {
                    v: number[];
                    c: number[];
                };
                "1315699200": {
                    v: number[];
                    c: number[];
                };
                "1316304000": {
                    v: number[];
                    c: number[];
                };
                "1316908800": {
                    v: number[];
                    c: number[];
                };
                "1317427200": {
                    v: number[];
                    c: number[];
                };
                "1318032000": {
                    v: number[];
                    c: number[];
                };
                "1318636800": {
                    v: number[];
                    c: number[];
                };
                "1319155200": {
                    v: number[];
                    c: number[];
                };
                "1319760000": {
                    v: number[];
                    c: number[];
                };
                "1320364800": {
                    v: number[];
                    c: number[];
                };
                "1320883200": {
                    v: number[];
                    c: number[];
                };
                "1321488000": {
                    v: number[];
                    c: number[];
                };
                "1322006400": {
                    v: number[];
                    c: number[];
                };
                "1322611200": {
                    v: number[];
                    c: number[];
                };
                "1323216000": {
                    v: number[];
                    c: number[];
                };
                "1323734400": {
                    v: number[];
                    c: number[];
                };
                "1324339200": {
                    v: number[];
                    c: number[];
                };
                "1324944000": {
                    v: number[];
                    c: number[];
                };
                "1325462400": {
                    v: number[];
                    c: number[];
                };
                "1326067200": {
                    v: number[];
                    c: number[];
                };
                "1326672000": {
                    v: number[];
                    c: number[];
                };
                "1327190400": {
                    v: number[];
                    c: number[];
                };
                "1327795200": {
                    v: number[];
                    c: number[];
                };
                "1328400000": {
                    v: number[];
                    c: number[];
                };
                "1328918400": {
                    v: number[];
                    c: number[];
                };
                "1329523200": {
                    v: number[];
                    c: number[];
                };
                "1330041600": {
                    v: number[];
                    c: number[];
                };
                "1330646400": {
                    v: number[];
                    c: number[];
                };
                "1331251200": {
                    v: number[];
                    c: number[];
                };
                "1331769600": {
                    v: number[];
                    c: number[];
                };
                "1332374400": {
                    v: number[];
                    c: number[];
                };
                "1332979200": {
                    v: number[];
                    c: number[];
                };
                "1333497600": {
                    v: number[];
                    c: number[];
                };
                "1334102400": {
                    v: number[];
                    c: number[];
                };
                "1334707200": {
                    v: number[];
                    c: number[];
                };
                "1335225600": {
                    v: number[];
                    c: number[];
                };
                "1335830400": {
                    v: number[];
                    c: number[];
                };
                "1336348800": {
                    v: number[];
                    c: number[];
                };
                "1336953600": {
                    v: number[];
                    c: number[];
                };
                "1337558400": {
                    v: number[];
                    c: number[];
                };
                "1338076800": {
                    v: number[];
                    c: number[];
                };
                "1338681600": {
                    v: number[];
                    c: number[];
                };
                "1339286400": {
                    v: number[];
                    c: number[];
                };
                "1339804800": {
                    v: number[];
                    c: number[];
                };
                "1340409600": {
                    v: number[];
                    c: number[];
                };
                "1341014400": {
                    v: number[];
                    c: number[];
                };
                "1341532800": {
                    v: number[];
                    c: number[];
                };
                "1342137600": {
                    v: number[];
                    c: number[];
                };
                "1342742400": {
                    v: number[];
                    c: number[];
                };
                "1343260800": {
                    v: number[];
                    c: number[];
                };
                "1343865600": {
                    v: number[];
                    c: number[];
                };
                "1344384000": {
                    v: number[];
                    c: number[];
                };
                "1344988800": {
                    v: number[];
                    c: number[];
                };
                "1345593600": {
                    v: number[];
                    c: number[];
                };
                "1346112000": {
                    v: number[];
                    c: number[];
                };
                "1346716800": {
                    v: number[];
                    c: number[];
                };
                "1347321600": {
                    v: number[];
                    c: number[];
                };
                "1347840000": {
                    v: number[];
                    c: number[];
                };
                "1348444800": {
                    v: number[];
                    c: number[];
                };
                "1349049600": {
                    v: number[];
                    c: number[];
                };
                "1349568000": {
                    v: number[];
                    c: number[];
                };
                "1350172800": {
                    v: number[];
                    c: number[];
                };
                "1350691200": {
                    v: number[];
                    c: number[];
                };
                "1351296000": {
                    v: number[];
                    c: number[];
                };
                "1351900800": {
                    v: number[];
                    c: number[];
                };
                "1352419200": {
                    v: number[];
                    c: number[];
                };
                "1353024000": {
                    v: number[];
                    c: number[];
                };
                "1353628800": {
                    v: number[];
                    c: number[];
                };
                "1354147200": {
                    v: number[];
                    c: number[];
                };
                "1354752000": {
                    v: number[];
                    c: number[];
                };
                "1355356800": {
                    v: number[];
                    c: number[];
                };
                "1355875200": {
                    v: number[];
                    c: number[];
                };
                "1356480000": {
                    v: number[];
                    c: number[];
                };
                "1357084800": {
                    v: number[];
                    c: number[];
                };
                "1357603200": {
                    v: number[];
                    c: number[];
                };
                "1358208000": {
                    v: number[];
                    c: number[];
                };
                "1358726400": {
                    v: number[];
                    c: number[];
                };
                "1359331200": {
                    v: number[];
                    c: number[];
                };
                "1359936000": {
                    v: number[];
                    c: number[];
                };
                "1360454400": {
                    v: number[];
                    c: number[];
                };
                "1361059200": {
                    v: number[];
                    c: number[];
                };
                "1361664000": {
                    v: number[];
                    c: number[];
                };
                "1362182400": {
                    v: number[];
                    c: number[];
                };
                "1362787200": {
                    v: number[];
                    c: number[];
                };
                "1363392000": {
                    v: number[];
                    c: number[];
                };
                "1363910400": {
                    v: number[];
                    c: number[];
                };
                "1364515200": {
                    v: number[];
                    c: number[];
                };
                "1365033600": {
                    v: number[];
                    c: number[];
                };
                "1365638400": {
                    v: number[];
                    c: number[];
                };
                "1366243200": {
                    v: number[];
                    c: number[];
                };
                "1366761600": {
                    v: number[];
                    c: number[];
                };
                "1367366400": {
                    v: number[];
                    c: number[];
                };
                "1367971200": {
                    v: number[];
                    c: number[];
                };
                "1368489600": {
                    v: number[];
                    c: number[];
                };
                "1369094400": {
                    v: number[];
                    c: number[];
                };
                "1369699200": {
                    v: number[];
                    c: number[];
                };
                "1370217600": {
                    v: number[];
                    c: number[];
                };
                "1370822400": {
                    v: number[];
                    c: number[];
                };
                "1371427200": {
                    v: number[];
                    c: number[];
                };
                "1371945600": {
                    v: number[];
                    c: number[];
                };
                "1372550400": {
                    v: number[];
                    c: number[];
                };
                "1373068800": {
                    v: number[];
                    c: number[];
                };
                "1373673600": {
                    v: number[];
                    c: number[];
                };
                "1374278400": {
                    v: number[];
                    c: number[];
                };
                "1374796800": {
                    v: number[];
                    c: number[];
                };
                "1375401600": {
                    v: number[];
                    c: number[];
                };
                "1376006400": {
                    v: number[];
                    c: number[];
                };
                "1376524800": {
                    v: number[];
                    c: number[];
                };
                "1377129600": {
                    v: number[];
                    c: number[];
                };
                "1377734400": {
                    v: number[];
                    c: number[];
                };
                "1378252800": {
                    v: number[];
                    c: number[];
                };
                "1378857600": {
                    v: number[];
                    c: number[];
                };
                "1379376000": {
                    v: number[];
                    c: number[];
                };
                "1379980800": {
                    v: number[];
                    c: number[];
                };
                "1380585600": {
                    v: number[];
                    c: number[];
                };
                "1381104000": {
                    v: number[];
                    c: number[];
                };
                "1381708800": {
                    v: number[];
                    c: number[];
                };
                "1382313600": {
                    v: number[];
                    c: number[];
                };
                "1382832000": {
                    v: number[];
                    c: number[];
                };
                "1383436800": {
                    v: number[];
                    c: number[];
                };
                "1384041600": {
                    v: number[];
                    c: number[];
                };
                "1384560000": {
                    v: number[];
                    c: number[];
                };
                "1385164800": {
                    v: number[];
                    c: number[];
                };
                "1385769600": {
                    v: number[];
                    c: number[];
                };
                "1386288000": {
                    v: number[];
                    c: number[];
                };
                "1386892800": {
                    v: number[];
                    c: number[];
                };
                "1387411200": {
                    v: number[];
                    c: number[];
                };
                "1388016000": {
                    v: number[];
                    c: number[];
                };
                "1388620800": {
                    v: number[];
                    c: number[];
                };
                "1389139200": {
                    v: number[];
                    c: number[];
                };
                "1389744000": {
                    v: number[];
                    c: number[];
                };
                "1390348800": {
                    v: number[];
                    c: number[];
                };
                "1390867200": {
                    v: number[];
                    c: number[];
                };
                "1391472000": {
                    v: number[];
                    c: number[];
                };
                "1392076800": {
                    v: number[];
                    c: number[];
                };
                "1392595200": {
                    v: number[];
                    c: number[];
                };
                "1393200000": {
                    v: number[];
                    c: number[];
                };
                "1393718400": {
                    v: number[];
                    c: number[];
                };
                "1394323200": {
                    v: number[];
                    c: number[];
                };
                "1394928000": {
                    v: number[];
                    c: number[];
                };
                "1395446400": {
                    v: number[];
                    c: number[];
                };
                "1396051200": {
                    v: number[];
                    c: number[];
                };
                "1396656000": {
                    v: number[];
                    c: number[];
                };
                "1397174400": {
                    v: number[];
                    c: number[];
                };
                "1397779200": {
                    v: number[];
                    c: number[];
                };
                "1398384000": {
                    v: number[];
                    c: number[];
                };
                "1398902400": {
                    v: number[];
                    c: number[];
                };
                "1399507200": {
                    v: number[];
                    c: number[];
                };
                "1400112000": {
                    v: number[];
                    c: number[];
                };
                "1400630400": {
                    v: number[];
                    c: number[];
                };
                "1401235200": {
                    v: number[];
                    c: number[];
                };
                "1401753600": {
                    v: number[];
                    c: number[];
                };
                "1402358400": {
                    v: number[];
                    c: number[];
                };
                "1402963200": {
                    v: number[];
                    c: number[];
                };
                "1403481600": {
                    v: number[];
                    c: number[];
                };
                "1404086400": {
                    v: number[];
                    c: number[];
                };
                "1404691200": {
                    v: number[];
                    c: number[];
                };
                "1405209600": {
                    v: number[];
                    c: number[];
                };
                "1405814400": {
                    v: number[];
                    c: number[];
                };
                "1406419200": {
                    v: number[];
                    c: number[];
                };
                "1406937600": {
                    v: number[];
                    c: number[];
                };
                "1407542400": {
                    v: number[];
                    c: number[];
                };
                "1408060800": {
                    v: number[];
                    c: number[];
                };
                "1408665600": {
                    v: number[];
                    c: number[];
                };
                "1409270400": {
                    v: number[];
                    c: number[];
                };
                "1409788800": {
                    v: number[];
                    c: number[];
                };
                "1410393600": {
                    v: number[];
                    c: number[];
                };
                "1410998400": {
                    v: number[];
                    c: number[];
                };
                "1411516800": {
                    v: number[];
                    c: number[];
                };
                "1412121600": {
                    v: number[];
                    c: number[];
                };
                "1412726400": {
                    v: number[];
                    c: number[];
                };
                "1413244800": {
                    v: number[];
                    c: number[];
                };
                "1413849600": {
                    v: number[];
                    c: number[];
                };
                "1414454400": {
                    v: number[];
                    c: number[];
                };
                "1414972800": {
                    v: number[];
                    c: number[];
                };
                "1415577600": {
                    v: number[];
                    c: number[];
                };
                "1416096000": {
                    v: number[];
                    c: number[];
                };
                "1416700800": {
                    v: number[];
                    c: number[];
                };
                "1417305600": {
                    v: number[];
                    c: number[];
                };
                "1417824000": {
                    v: number[];
                    c: number[];
                };
                "1418428800": {
                    v: number[];
                    c: number[];
                };
                "1419033600": {
                    v: number[];
                    c: number[];
                };
                "1419552000": {
                    v: number[];
                    c: number[];
                };
                "1420156800": {
                    v: number[];
                    c: number[];
                };
                "1420761600": {
                    v: number[];
                    c: number[];
                };
                "1421280000": {
                    v: number[];
                    c: number[];
                };
                "1421884800": {
                    v: number[];
                    c: number[];
                };
                "1422403200": {
                    v: number[];
                    c: number[];
                };
                "1423008000": {
                    v: number[];
                    c: number[];
                };
                "1423612800": {
                    v: number[];
                    c: number[];
                };
                "1424131200": {
                    v: number[];
                    c: number[];
                };
                "1424736000": {
                    v: number[];
                    c: number[];
                };
                "1425340800": {
                    v: number[];
                    c: number[];
                };
                "1425859200": {
                    v: number[];
                    c: number[];
                };
                "1426464000": {
                    v: number[];
                    c: number[];
                };
                "1427068800": {
                    v: number[];
                    c: number[];
                };
                "1427587200": {
                    v: number[];
                    c: number[];
                };
                "1428192000": {
                    v: number[];
                    c: number[];
                };
                "1428796800": {
                    v: number[];
                    c: number[];
                };
                "1429315200": {
                    v: number[];
                    c: number[];
                };
                "1429920000": {
                    v: number[];
                    c: number[];
                };
                "1430438400": {
                    v: number[];
                    c: number[];
                };
                "1431043200": {
                    v: number[];
                    c: number[];
                };
                "1431648000": {
                    v: number[];
                    c: number[];
                };
                "1432166400": {
                    v: number[];
                    c: number[];
                };
                "1432771200": {
                    v: number[];
                    c: number[];
                };
                "1433376000": {
                    v: number[];
                    c: number[];
                };
                "1433894400": {
                    v: number[];
                    c: number[];
                };
                "1434499200": {
                    v: number[];
                    c: number[];
                };
                "1435104000": {
                    v: number[];
                    c: number[];
                };
                "1435622400": {
                    v: number[];
                    c: number[];
                };
                "1436227200": {
                    v: number[];
                    c: number[];
                };
                "1436745600": {
                    v: number[];
                    c: number[];
                };
                "1437350400": {
                    v: number[];
                    c: number[];
                };
                "1437955200": {
                    v: number[];
                    c: number[];
                };
                "1438473600": {
                    v: number[];
                    c: number[];
                };
                "1439078400": {
                    v: number[];
                    c: number[];
                };
                "1439683200": {
                    v: number[];
                    c: number[];
                };
                "1440201600": {
                    v: number[];
                    c: number[];
                };
                "1440806400": {
                    v: number[];
                    c: number[];
                };
                "1441411200": {
                    v: number[];
                    c: number[];
                };
                "1441929600": {
                    v: number[];
                    c: number[];
                };
                "1442534400": {
                    v: number[];
                    c: number[];
                };
                "1443139200": {
                    v: number[];
                    c: number[];
                };
                "1443657600": {
                    v: number[];
                    c: number[];
                };
                "1444262400": {
                    v: number[];
                    c: number[];
                };
                "1444780800": {
                    v: number[];
                    c: number[];
                };
                "1445385600": {
                    v: number[];
                    c: number[];
                };
                "1445990400": {
                    v: number[];
                    c: number[];
                };
                "1446508800": {
                    v: number[];
                    c: number[];
                };
                "1447113600": {
                    v: number[];
                    c: number[];
                };
                "1447718400": {
                    v: number[];
                    c: number[];
                };
                "1448236800": {
                    v: number[];
                    c: number[];
                };
                "1448841600": {
                    v: number[];
                    c: number[];
                };
                "1449446400": {
                    v: number[];
                    c: number[];
                };
                "1449964800": {
                    v: number[];
                    c: number[];
                };
                "1450569600": {
                    v: number[];
                    c: number[];
                };
                "1451088000": {
                    v: number[];
                    c: number[];
                };
                "1451692800": {
                    v: number[];
                    c: number[];
                };
                "1452297600": {
                    v: number[];
                    c: number[];
                };
                "1452816000": {
                    v: number[];
                    c: number[];
                };
                "1453420800": {
                    v: number[];
                    c: number[];
                };
                "1454025600": {
                    v: number[];
                    c: number[];
                };
                "1454544000": {
                    v: number[];
                    c: number[];
                };
                "1455148800": {
                    v: number[];
                    c: number[];
                };
                "1455753600": {
                    v: number[];
                    c: number[];
                };
                "1456272000": {
                    v: number[];
                    c: number[];
                };
                "1456876800": {
                    v: number[];
                    c: number[];
                };
                "1457481600": {
                    v: number[];
                    c: number[];
                };
                "1458000000": {
                    v: number[];
                    c: number[];
                };
                "1458604800": {
                    v: number[];
                    c: number[];
                };
                "1459123200": {
                    v: number[];
                    c: number[];
                };
                "1459728000": {
                    v: number[];
                    c: number[];
                };
                "1460332800": {
                    v: number[];
                    c: number[];
                };
                "1460851200": {
                    v: number[];
                    c: number[];
                };
                "1461456000": {
                    v: number[];
                    c: number[];
                };
                "1462060800": {
                    v: number[];
                    c: number[];
                };
                "1462579200": {
                    v: number[];
                    c: number[];
                };
                "1463184000": {
                    v: number[];
                    c: number[];
                };
                "1463788800": {
                    v: number[];
                    c: number[];
                };
                "1464307200": {
                    v: number[];
                    c: number[];
                };
                "1464912000": {
                    v: number[];
                    c: number[];
                };
                "1465430400": {
                    v: number[];
                    c: number[];
                };
                "1466035200": {
                    v: number[];
                    c: number[];
                };
                "1466640000": {
                    v: number[];
                    c: number[];
                };
                "1467158400": {
                    v: number[];
                    c: number[];
                };
                "1467763200": {
                    v: number[];
                    c: number[];
                };
                "1468368000": {
                    v: number[];
                    c: number[];
                };
                "1468886400": {
                    v: number[];
                    c: number[];
                };
                "1469491200": {
                    v: number[];
                    c: number[];
                };
                "1470096000": {
                    v: number[];
                    c: number[];
                };
                "1470614400": {
                    v: number[];
                    c: number[];
                };
                "1471219200": {
                    v: number[];
                    c: number[];
                };
                "1471824000": {
                    v: number[];
                    c: number[];
                };
                "1472342400": {
                    v: number[];
                    c: number[];
                };
                "1472947200": {
                    v: number[];
                    c: number[];
                };
                "1473465600": {
                    v: number[];
                    c: number[];
                };
                "1474070400": {
                    v: number[];
                    c: number[];
                };
                "1474675200": {
                    v: number[];
                    c: number[];
                };
                "1475193600": {
                    v: number[];
                    c: number[];
                };
                "1475798400": {
                    v: number[];
                    c: number[];
                };
                "1476403200": {
                    v: number[];
                    c: number[];
                };
                "1476921600": {
                    v: number[];
                    c: number[];
                };
                "1477526400": {
                    v: number[];
                    c: number[];
                };
                "1478131200": {
                    v: number[];
                    c: number[];
                };
                "1478649600": {
                    v: number[];
                    c: number[];
                };
                "1479254400": {
                    v: number[];
                    c: number[];
                };
                "1479772800": {
                    v: number[];
                    c: number[];
                };
                "1480377600": {
                    v: number[];
                    c: number[];
                };
                "1480982400": {
                    v: number[];
                    c: number[];
                };
                "1481500800": {
                    v: number[];
                    c: number[];
                };
                "1482105600": {
                    v: number[];
                    c: number[];
                };
                "1482710400": {
                    v: number[];
                    c: number[];
                };
                "1483228800": {
                    v: number[];
                    c: number[];
                };
                "1483833600": {
                    v: number[];
                    c: number[];
                };
                "1484438400": {
                    v: number[];
                    c: number[];
                };
                "1484956800": {
                    v: number[];
                    c: number[];
                };
                "1485561600": {
                    v: number[];
                    c: number[];
                };
                "1486166400": {
                    v: number[];
                    c: number[];
                };
                "1486684800": {
                    v: number[];
                    c: number[];
                };
                "1487289600": {
                    v: number[];
                    c: number[];
                };
                "1487808000": {
                    v: number[];
                    c: number[];
                };
                "1488412800": {
                    v: number[];
                    c: number[];
                };
                "1489017600": {
                    v: number[];
                    c: number[];
                };
                "1489536000": {
                    v: number[];
                    c: number[];
                };
                "1490140800": {
                    v: number[];
                    c: number[];
                };
                "1490745600": {
                    v: number[];
                    c: number[];
                };
                "1491264000": {
                    v: number[];
                    c: number[];
                };
                "1491868800": {
                    v: number[];
                    c: number[];
                };
                "1492473600": {
                    v: number[];
                    c: number[];
                };
                "1492992000": {
                    v: number[];
                    c: number[];
                };
                "1493596800": {
                    v: number[];
                    c: number[];
                };
                "1494115200": {
                    v: number[];
                    c: number[];
                };
                "1494720000": {
                    v: number[];
                    c: number[];
                };
                "1495324800": {
                    v: number[];
                    c: number[];
                };
                "1495843200": {
                    v: number[];
                    c: number[];
                };
                "1496448000": {
                    v: number[];
                    c: number[];
                };
                "1497052800": {
                    v: number[];
                    c: number[];
                };
                "1497571200": {
                    v: number[];
                    c: number[];
                };
                "1498176000": {
                    v: number[];
                    c: number[];
                };
                "1498780800": {
                    v: number[];
                    c: number[];
                };
                "1499299200": {
                    v: number[];
                    c: number[];
                };
                "1499904000": {
                    v: number[];
                    c: number[];
                };
                "1500508800": {
                    v: number[];
                    c: number[];
                };
                "1501027200": {
                    v: number[];
                    c: number[];
                };
                "1501632000": {
                    v: number[];
                    c: number[];
                };
                "1502150400": {
                    v: number[];
                    c: number[];
                };
                "1502755200": {
                    v: number[];
                    c: number[];
                };
                "1503360000": {
                    v: number[];
                    c: number[];
                };
                "1503878400": {
                    v: number[];
                    c: number[];
                };
                "1504483200": {
                    v: number[];
                    c: number[];
                };
                "1505088000": {
                    v: number[];
                    c: number[];
                };
                "1505606400": {
                    v: number[];
                    c: number[];
                };
                "1506211200": {
                    v: number[];
                    c: number[];
                };
                "1506816000": {
                    v: number[];
                    c: number[];
                };
                "1507334400": {
                    v: number[];
                    c: number[];
                };
                "1507939200": {
                    v: number[];
                    c: number[];
                };
                "1508457600": {
                    v: number[];
                    c: number[];
                };
                "1509062400": {
                    v: number[];
                    c: number[];
                };
                "1509667200": {
                    v: number[];
                    c: number[];
                };
                "1510185600": {
                    v: number[];
                    c: number[];
                };
                "1510790400": {
                    v: number[];
                    c: number[];
                };
                "1511395200": {
                    v: number[];
                    c: number[];
                };
                "1511913600": {
                    v: number[];
                    c: number[];
                };
                "1512518400": {
                    v: number[];
                    c: number[];
                };
                "1513123200": {
                    v: number[];
                    c: number[];
                };
                "1513641600": {
                    v: number[];
                    c: number[];
                };
                "1514246400": {
                    v: number[];
                    c: number[];
                };
                "1514851200": {
                    v: number[];
                    c: number[];
                };
                "1515369600": {
                    v: number[];
                    c: number[];
                };
                "1515974400": {
                    v: number[];
                    c: number[];
                };
                "1516492800": {
                    v: number[];
                    c: number[];
                };
                "1517097600": {
                    v: number[];
                    c: number[];
                };
                "1517702400": {
                    v: number[];
                    c: number[];
                };
                "1518220800": {
                    v: number[];
                    c: number[];
                };
                "1518825600": {
                    v: number[];
                    c: number[];
                };
                "1519430400": {
                    v: number[];
                    c: number[];
                };
                "1519948800": {
                    v: number[];
                    c: number[];
                };
                "1520553600": {
                    v: number[];
                    c: number[];
                };
                "1521158400": {
                    v: number[];
                    c: number[];
                };
                "1521676800": {
                    v: number[];
                    c: number[];
                };
                "1522281600": {
                    v: number[];
                    c: number[];
                };
                "1522800000": {
                    v: number[];
                    c: number[];
                };
                "1523404800": {
                    v: number[];
                    c: number[];
                };
                "1524009600": {
                    v: number[];
                    c: number[];
                };
                "1524528000": {
                    v: number[];
                    c: number[];
                };
                "1525132800": {
                    v: number[];
                    c: number[];
                };
                "1525737600": {
                    v: number[];
                    c: number[];
                };
                "1526256000": {
                    v: number[];
                    c: number[];
                };
                "1526860800": {
                    v: number[];
                    c: number[];
                };
                "1527465600": {
                    v: number[];
                    c: number[];
                };
                "1527984000": {
                    v: number[];
                    c: number[];
                };
                "1528588800": {
                    v: number[];
                    c: number[];
                };
                "1529193600": {
                    v: number[];
                    c: number[];
                };
                "1529712000": {
                    v: number[];
                    c: number[];
                };
                "1530316800": {
                    v: number[];
                    c: number[];
                };
                "1530835200": {
                    v: number[];
                    c: number[];
                };
                "1531440000": {
                    v: number[];
                    c: number[];
                };
                "1532044800": {
                    v: number[];
                    c: number[];
                };
                "1532563200": {
                    v: number[];
                    c: number[];
                };
                "1533168000": {
                    v: number[];
                    c: number[];
                };
                "1533772800": {
                    v: number[];
                    c: number[];
                };
                "1534291200": {
                    v: number[];
                    c: number[];
                };
                "1534896000": {
                    v: number[];
                    c: number[];
                };
                "1535500800": {
                    v: number[];
                    c: number[];
                };
                "1536019200": {
                    v: number[];
                    c: number[];
                };
                "1536624000": {
                    v: number[];
                    c: number[];
                };
                "1537142400": {
                    v: number[];
                    c: number[];
                };
                "1537747200": {
                    v: number[];
                    c: number[];
                };
                "1538352000": {
                    v: number[];
                    c: number[];
                };
                "1538870400": {
                    v: number[];
                    c: number[];
                };
                "1539475200": {
                    v: number[];
                    c: number[];
                };
                "1540080000": {
                    v: number[];
                    c: number[];
                };
                "1540598400": {
                    v: number[];
                    c: number[];
                };
                "1541203200": {
                    v: number[];
                    c: number[];
                };
                "1541808000": {
                    v: number[];
                    c: number[];
                };
                "1542326400": {
                    v: number[];
                    c: number[];
                };
                "1542931200": {
                    v: number[];
                    c: number[];
                };
                "1543536000": {
                    v: number[];
                    c: number[];
                };
                "1544054400": {
                    v: number[];
                    c: number[];
                };
                "1544659200": {
                    v: number[];
                    c: number[];
                };
                "1545177600": {
                    v: number[];
                    c: number[];
                };
                "1545782400": {
                    v: number[];
                    c: number[];
                };
                "1546387200": {
                    v: number[];
                    c: number[];
                };
                "1546905600": {
                    v: number[];
                    c: number[];
                };
                "1547510400": {
                    v: number[];
                    c: number[];
                };
                "1548115200": {
                    v: number[];
                    c: number[];
                };
                "1548633600": {
                    v: number[];
                    c: number[];
                };
                "1549238400": {
                    v: number[];
                    c: number[];
                };
                "1549843200": {
                    v: number[];
                    c: number[];
                };
                "1550361600": {
                    v: number[];
                    c: number[];
                };
                "1550966400": {
                    v: number[];
                    c: number[];
                };
                "1551484800": {
                    v: number[];
                    c: number[];
                };
                "1552089600": {
                    v: number[];
                    c: number[];
                };
                "1552694400": {
                    v: number[];
                    c: number[];
                };
                "1553212800": {
                    v: number[];
                    c: number[];
                };
                "1553817600": {
                    v: number[];
                    c: number[];
                };
                "1554422400": {
                    v: number[];
                    c: number[];
                };
                "1554940800": {
                    v: number[];
                    c: number[];
                };
                "1555545600": {
                    v: number[];
                    c: number[];
                };
                "1556150400": {
                    v: number[];
                    c: number[];
                };
                "1556668800": {
                    v: number[];
                    c: number[];
                };
                "1557273600": {
                    v: number[];
                    c: number[];
                };
                "1557878400": {
                    v: number[];
                    c: number[];
                };
                "1558396800": {
                    v: number[];
                    c: number[];
                };
                "1559001600": {
                    v: number[];
                    c: number[];
                };
                "1559520000": {
                    v: number[];
                    c: number[];
                };
                "1560124800": {
                    v: number[];
                    c: number[];
                };
                "1560729600": {
                    v: number[];
                    c: number[];
                };
                "1561248000": {
                    v: number[];
                    c: number[];
                };
                "1561852800": {
                    v: number[];
                    c: number[];
                };
                "1562457600": {
                    v: number[];
                    c: number[];
                };
                "1562976000": {
                    v: number[];
                    c: number[];
                };
                "1563580800": {
                    v: number[];
                    c: number[];
                };
                "1564185600": {
                    v: number[];
                    c: number[];
                };
                "1564704000": {
                    v: number[];
                    c: number[];
                };
                "1565308800": {
                    v: number[];
                    c: number[];
                };
                "1565827200": {
                    v: number[];
                    c: number[];
                };
                "1566432000": {
                    v: number[];
                    c: number[];
                };
                "1567036800": {
                    v: number[];
                    c: number[];
                };
                "1567555200": {
                    v: number[];
                    c: number[];
                };
                "1568160000": {
                    v: number[];
                    c: number[];
                };
                "1568764800": {
                    v: number[];
                    c: number[];
                };
                "1569283200": {
                    v: number[];
                    c: number[];
                };
                "1569888000": {
                    v: number[];
                    c: number[];
                };
                "1570492800": {
                    v: number[];
                    c: number[];
                };
                "1571011200": {
                    v: number[];
                    c: number[];
                };
                "1571616000": {
                    v: number[];
                    c: number[];
                };
                "1572220800": {
                    v: number[];
                    c: number[];
                };
                "1572739200": {
                    v: number[];
                    c: number[];
                };
                "1573344000": {
                    v: number[];
                    c: number[];
                };
                "1573862400": {
                    v: number[];
                    c: number[];
                };
                "1574467200": {
                    v: number[];
                    c: number[];
                };
                "1575072000": {
                    v: number[];
                    c: number[];
                };
                "1575590400": {
                    v: number[];
                    c: number[];
                };
                "1576195200": {
                    v: number[];
                    c: number[];
                };
                "1576800000": {
                    v: number[];
                    c: number[];
                };
                "1577318400": {
                    v: number[];
                    c: number[];
                };
                "1577923200": {
                    v: number[];
                    c: number[];
                };
                "1578528000": {
                    v: number[];
                    c: number[];
                };
                "1579046400": {
                    v: number[];
                    c: number[];
                };
                "1579651200": {
                    v: number[];
                    c: number[];
                };
                "1580169600": {
                    v: number[];
                    c: number[];
                };
                "1580774400": {
                    v: number[];
                    c: number[];
                };
                "1581379200": {
                    v: number[];
                    c: number[];
                };
                "1581897600": {
                    v: number[];
                    c: number[];
                };
                "1582502400": {
                    v: number[];
                    c: number[];
                };
                "1583107200": {
                    v: number[];
                    c: number[];
                };
                "1583625600": {
                    v: number[];
                    c: number[];
                };
                "1584230400": {
                    v: number[];
                    c: number[];
                };
                "1584835200": {
                    v: number[];
                    c: number[];
                };
                "1585353600": {
                    v: number[];
                    c: number[];
                };
                "1585958400": {
                    v: number[];
                    c: number[];
                };
                "1586563200": {
                    v: number[];
                    c: number[];
                };
                "1587081600": {
                    v: number[];
                    c: number[];
                };
                "1587686400": {
                    v: number[];
                    c: number[];
                };
                "1588204800": {
                    v: number[];
                    c: number[];
                };
                "1588809600": {
                    v: number[];
                    c: number[];
                };
                "1589414400": {
                    v: number[];
                    c: number[];
                };
                "1589932800": {
                    v: number[];
                    c: number[];
                };
                "1590537600": {
                    v: number[];
                    c: number[];
                };
                "1591142400": {
                    v: number[];
                    c: number[];
                };
                "1591660800": {
                    v: number[];
                    c: number[];
                };
                "1592265600": {
                    v: number[];
                    c: number[];
                };
                "1592870400": {
                    v: number[];
                    c: number[];
                };
                "1593388800": {
                    v: number[];
                    c: number[];
                };
                "1593993600": {
                    v: number[];
                    c: number[];
                };
                "1594512000": {
                    v: number[];
                    c: number[];
                };
                "1595116800": {
                    v: number[];
                    c: number[];
                };
                "1595721600": {
                    v: number[];
                    c: number[];
                };
                "1596240000": {
                    v: number[];
                    c: number[];
                };
                "1596844800": {
                    v: number[];
                    c: number[];
                };
                "1597449600": {
                    v: number[];
                    c: number[];
                };
                "1597968000": {
                    v: number[];
                    c: number[];
                };
                "1598572800": {
                    v: number[];
                    c: number[];
                };
                "1599177600": {
                    v: number[];
                    c: number[];
                };
                "1599696000": {
                    v: number[];
                    c: number[];
                };
                "1600300800": {
                    v: number[];
                    c: number[];
                };
                "1600905600": {
                    v: number[];
                    c: number[];
                };
                "1601424000": {
                    v: number[];
                    c: number[];
                };
                "1602028800": {
                    v: number[];
                    c: number[];
                };
                "1602547200": {
                    v: number[];
                    c: number[];
                };
                "1603152000": {
                    v: number[];
                    c: number[];
                };
                "1603756800": {
                    v: number[];
                    c: number[];
                };
                "1604275200": {
                    v: number[];
                    c: number[];
                };
                "1604880000": {
                    v: number[];
                    c: number[];
                };
                "1605484800": {
                    v: number[];
                    c: number[];
                };
                "1606003200": {
                    v: number[];
                    c: number[];
                };
                "1606608000": {
                    v: number[];
                    c: number[];
                };
                "1607212800": {
                    v: number[];
                    c: number[];
                };
                "1607731200": {
                    v: number[];
                    c: number[];
                };
                "1608336000": {
                    v: number[];
                    c: number[];
                };
                "1608854400": {
                    v: number[];
                    c: number[];
                };
                "1609459200": {
                    v: number[];
                    c: number[];
                };
                "1610064000": {
                    v: number[];
                    c: number[];
                };
                "1610582400": {
                    v: number[];
                    c: number[];
                };
                "1611187200": {
                    v: number[];
                    c: number[];
                };
                "1611792000": {
                    v: number[];
                    c: number[];
                };
                "1612310400": {
                    v: number[];
                    c: number[];
                };
                "1612915200": {
                    v: number[];
                    c: number[];
                };
                "1613520000": {
                    v: number[];
                    c: number[];
                };
                "1614038400": {
                    v: number[];
                    c: number[];
                };
                "1614643200": {
                    v: number[];
                    c: number[];
                };
                "1615248000": {
                    v: number[];
                    c: number[];
                };
                "1615766400": {
                    v: number[];
                    c: number[];
                };
                "1616371200": {
                    v: number[];
                    c: number[];
                };
                "1616889600": {
                    v: number[];
                    c: number[];
                };
                "1617494400": {
                    v: number[];
                    c: number[];
                };
                "1618099200": {
                    v: number[];
                    c: number[];
                };
                "1618617600": {
                    v: number[];
                    c: number[];
                };
                "1619222400": {
                    v: number[];
                    c: number[];
                };
                "1619827200": {
                    v: number[];
                    c: number[];
                };
                "1620345600": {
                    v: number[];
                    c: number[];
                };
                "1620950400": {
                    v: number[];
                    c: number[];
                };
                "1621555200": {
                    v: number[];
                    c: number[];
                };
                "1622073600": {
                    v: number[];
                    c: number[];
                };
                "1622678400": {
                    v: number[];
                    c: number[];
                };
                "1623196800": {
                    v: number[];
                    c: number[];
                };
                "1623801600": {
                    v: number[];
                    c: number[];
                };
                "1624406400": {
                    v: number[];
                    c: number[];
                };
                "1624924800": {
                    v: number[];
                    c: number[];
                };
                "1625529600": {
                    v: number[];
                    c: number[];
                };
                "1626134400": {
                    v: number[];
                    c: number[];
                };
                "1626652800": {
                    v: number[];
                    c: number[];
                };
                "1627257600": {
                    v: number[];
                    c: number[];
                };
                "1627862400": {
                    v: number[];
                    c: number[];
                };
                "1628380800": {
                    v: number[];
                    c: number[];
                };
                "1628985600": {
                    v: number[];
                    c: number[];
                };
                "1629590400": {
                    v: number[];
                    c: number[];
                };
                "1630108800": {
                    v: number[];
                    c: number[];
                };
                "1630713600": {
                    v: number[];
                    c: number[];
                };
                "1631232000": {
                    v: number[];
                    c: number[];
                };
                "1631836800": {
                    v: number[];
                    c: number[];
                };
                "1632441600": {
                    v: number[];
                    c: number[];
                };
                "1632960000": {
                    v: number[];
                    c: number[];
                };
                "1633564800": {
                    v: number[];
                    c: number[];
                };
                "1634169600": {
                    v: number[];
                    c: number[];
                };
                "1634688000": {
                    v: number[];
                    c: number[];
                };
                "1635292800": {
                    v: number[];
                    c: number[];
                };
                "1635897600": {
                    v: number[];
                    c: number[];
                };
                "1636416000": {
                    v: number[];
                    c: number[];
                };
                "1637020800": {
                    v: number[];
                    c: number[];
                };
                "1637539200": {
                    v: number[];
                    c: number[];
                };
                "1638144000": {
                    v: number[];
                    c: number[];
                };
                "1638748800": {
                    v: number[];
                    c: number[];
                };
                "1639267200": {
                    v: number[];
                    c: number[];
                };
                "1639872000": {
                    v: number[];
                    c: number[];
                };
                "1640476800": {
                    v: number[];
                    c: number[];
                };
                "1640995200": {
                    v: number[];
                    c: number[];
                };
                "1641600000": {
                    v: number[];
                    c: number[];
                };
                "1642204800": {
                    v: number[];
                    c: number[];
                };
                "1642723200": {
                    v: number[];
                    c: number[];
                };
                "1643328000": {
                    v: number[];
                    c: number[];
                };
                "1643932800": {
                    v: number[];
                    c: number[];
                };
                "1644451200": {
                    v: number[];
                    c: number[];
                };
                "1645056000": {
                    v: number[];
                    c: number[];
                };
                "1645574400": {
                    v: number[];
                    c: number[];
                };
                "1646179200": {
                    v: number[];
                    c: number[];
                };
                "1646784000": {
                    v: number[];
                    c: number[];
                };
                "1647302400": {
                    v: number[];
                    c: number[];
                };
                "1647907200": {
                    v: number[];
                    c: number[];
                };
                "1648512000": {
                    v: number[];
                    c: number[];
                };
                "1649030400": {
                    v: number[];
                    c: number[];
                };
                "1649635200": {
                    v: number[];
                    c: number[];
                };
                "1650240000": {
                    v: number[];
                    c: number[];
                };
                "1650758400": {
                    v: number[];
                    c: number[];
                };
                "1651363200": {
                    v: number[];
                    c: number[];
                };
                "1651881600": {
                    v: number[];
                    c: number[];
                };
                "1652486400": {
                    v: number[];
                    c: number[];
                };
                "1653091200": {
                    v: number[];
                    c: number[];
                };
                "1653609600": {
                    v: number[];
                    c: number[];
                };
                "1654214400": {
                    v: number[];
                    c: number[];
                };
                "1654819200": {
                    v: number[];
                    c: number[];
                };
                "1655337600": {
                    v: number[];
                    c: number[];
                };
                "1655942400": {
                    v: number[];
                    c: number[];
                };
                "1656547200": {
                    v: number[];
                    c: number[];
                };
                "1657065600": {
                    v: number[];
                    c: number[];
                };
                "1657670400": {
                    v: number[];
                    c: number[];
                };
                "1658275200": {
                    v: number[];
                    c: number[];
                };
                "1658793600": {
                    v: number[];
                    c: number[];
                };
                "1659398400": {
                    v: number[];
                    c: number[];
                };
                "1659916800": {
                    v: number[];
                    c: number[];
                };
                "1660521600": {
                    v: number[];
                    c: number[];
                };
                "1661126400": {
                    v: number[];
                    c: number[];
                };
                "1661644800": {
                    v: number[];
                    c: number[];
                };
                "1662249600": {
                    v: number[];
                    c: number[];
                };
                "1662854400": {
                    v: number[];
                    c: number[];
                };
                "1663372800": {
                    v: number[];
                    c: number[];
                };
                "1663977600": {
                    v: number[];
                    c: number[];
                };
                "1664582400": {
                    v: number[];
                    c: number[];
                };
                "1665100800": {
                    v: number[];
                    c: number[];
                };
                "1665705600": {
                    v: number[];
                    c: number[];
                };
                "1666224000": {
                    v: number[];
                    c: number[];
                };
                "1666828800": {
                    v: number[];
                    c: number[];
                };
                "1667433600": {
                    v: number[];
                    c: number[];
                };
                "1667952000": {
                    v: number[];
                    c: number[];
                };
                "1668556800": {
                    v: number[];
                    c: number[];
                };
                "1669161600": {
                    v: number[];
                    c: number[];
                };
                "1669680000": {
                    v: number[];
                    c: number[];
                };
                "1670284800": {
                    v: number[];
                    c: number[];
                };
                "1670889600": {
                    v: number[];
                    c: number[];
                };
                "1671408000": {
                    v: number[];
                    c: number[];
                };
                "1672012800": {
                    v: number[];
                    c: number[];
                };
                "1672617600": {
                    v: number[];
                    c: number[];
                };
                "1673136000": {
                    v: number[];
                    c: number[];
                };
                "1673740800": {
                    v: number[];
                    c: number[];
                };
                "1674259200": {
                    v: number[];
                    c: number[];
                };
                "1674864000": {
                    v: number[];
                    c: number[];
                };
                "1675468800": {
                    v: number[];
                    c: number[];
                };
                "1675987200": {
                    v: number[];
                    c: number[];
                };
                "1676592000": {
                    v: number[];
                    c: number[];
                };
                "1677196800": {
                    v: number[];
                    c: number[];
                };
                "1677715200": {
                    v: number[];
                    c: number[];
                };
                "1678320000": {
                    v: number[];
                    c: number[];
                };
                "1678924800": {
                    v: number[];
                    c: number[];
                };
                "1679443200": {
                    v: number[];
                    c: number[];
                };
                "1680048000": {
                    v: number[];
                    c: number[];
                };
                "1680578654": {
                    v: number[];
                };
            };
        };
        status: {
            timestamp: string;
            error_code: string;
            error_message: string;
            elapsed: string;
            credit_count: number;
        };
    };
}
/// <amd-module name="@scom/scom-trading-chart/store/dummy/historical.json.ts" />
declare module "@scom/scom-trading-chart/store/dummy/historical.json.ts" {
    export const historical: {
        data: {
            id: number;
            name: string;
            symbol: string;
            quotes: {
                timeOpen: string;
                timeClose: string;
                timeHigh: string;
                timeLow: string;
                quote: {
                    open: number;
                    high: number;
                    low: number;
                    close: number;
                    volume: number;
                    marketCap: number;
                    timestamp: string;
                };
            }[];
        };
        status: {
            timestamp: string;
            error_code: string;
            error_message: string;
            elapsed: string;
            credit_count: number;
        };
    };
}
/// <amd-module name="@scom/scom-trading-chart/store/dummy/ytd.json.ts" />
declare module "@scom/scom-trading-chart/store/dummy/ytd.json.ts" {
    export const ytd: {
        data: {
            points: {
                "1672531200": {
                    v: number[];
                    c: number[];
                };
                "1672545600": {
                    v: number[];
                    c: number[];
                };
                "1672556400": {
                    v: number[];
                    c: number[];
                };
                "1672567200": {
                    v: number[];
                    c: number[];
                };
                "1672578000": {
                    v: number[];
                    c: number[];
                };
                "1672592400": {
                    v: number[];
                    c: number[];
                };
                "1672603200": {
                    v: number[];
                    c: number[];
                };
                "1672614000": {
                    v: number[];
                    c: number[];
                };
                "1672624800": {
                    v: number[];
                    c: number[];
                };
                "1672639200": {
                    v: number[];
                    c: number[];
                };
                "1672650000": {
                    v: number[];
                    c: number[];
                };
                "1672660800": {
                    v: number[];
                    c: number[];
                };
                "1672671600": {
                    v: number[];
                    c: number[];
                };
                "1672682400": {
                    v: number[];
                    c: number[];
                };
                "1672696800": {
                    v: number[];
                    c: number[];
                };
                "1672707600": {
                    v: number[];
                    c: number[];
                };
                "1672718400": {
                    v: number[];
                    c: number[];
                };
                "1672729200": {
                    v: number[];
                    c: number[];
                };
                "1672743600": {
                    v: number[];
                    c: number[];
                };
                "1672754400": {
                    v: number[];
                    c: number[];
                };
                "1672765200": {
                    v: number[];
                    c: number[];
                };
                "1672776000": {
                    v: number[];
                    c: number[];
                };
                "1672786800": {
                    v: number[];
                    c: number[];
                };
                "1672801200": {
                    v: number[];
                    c: number[];
                };
                "1672812000": {
                    v: number[];
                    c: number[];
                };
                "1672822800": {
                    v: number[];
                    c: number[];
                };
                "1672833600": {
                    v: number[];
                    c: number[];
                };
                "1672848000": {
                    v: number[];
                    c: number[];
                };
                "1672858800": {
                    v: number[];
                    c: number[];
                };
                "1672869600": {
                    v: number[];
                    c: number[];
                };
                "1672880400": {
                    v: number[];
                    c: number[];
                };
                "1672891200": {
                    v: number[];
                    c: number[];
                };
                "1672905600": {
                    v: number[];
                    c: number[];
                };
                "1672916400": {
                    v: number[];
                    c: number[];
                };
                "1672927200": {
                    v: number[];
                    c: number[];
                };
                "1672938000": {
                    v: number[];
                    c: number[];
                };
                "1672952400": {
                    v: number[];
                    c: number[];
                };
                "1672963200": {
                    v: number[];
                    c: number[];
                };
                "1672974000": {
                    v: number[];
                    c: number[];
                };
                "1672984800": {
                    v: number[];
                    c: number[];
                };
                "1672999200": {
                    v: number[];
                    c: number[];
                };
                "1673010000": {
                    v: number[];
                    c: number[];
                };
                "1673020800": {
                    v: number[];
                    c: number[];
                };
                "1673031600": {
                    v: number[];
                    c: number[];
                };
                "1673042400": {
                    v: number[];
                    c: number[];
                };
                "1673056800": {
                    v: number[];
                    c: number[];
                };
                "1673067600": {
                    v: number[];
                    c: number[];
                };
                "1673078400": {
                    v: number[];
                    c: number[];
                };
                "1673089200": {
                    v: number[];
                    c: number[];
                };
                "1673103600": {
                    v: number[];
                    c: number[];
                };
                "1673114400": {
                    v: number[];
                    c: number[];
                };
                "1673125200": {
                    v: number[];
                    c: number[];
                };
                "1673136000": {
                    v: number[];
                    c: number[];
                };
                "1673146800": {
                    v: number[];
                    c: number[];
                };
                "1673161200": {
                    v: number[];
                    c: number[];
                };
                "1673172000": {
                    v: number[];
                    c: number[];
                };
                "1673182800": {
                    v: number[];
                    c: number[];
                };
                "1673193600": {
                    v: number[];
                    c: number[];
                };
                "1673208000": {
                    v: number[];
                    c: number[];
                };
                "1673218800": {
                    v: number[];
                    c: number[];
                };
                "1673229600": {
                    v: number[];
                    c: number[];
                };
                "1673240400": {
                    v: number[];
                    c: number[];
                };
                "1673251200": {
                    v: number[];
                    c: number[];
                };
                "1673265600": {
                    v: number[];
                    c: number[];
                };
                "1673276400": {
                    v: number[];
                    c: number[];
                };
                "1673287200": {
                    v: number[];
                    c: number[];
                };
                "1673298000": {
                    v: number[];
                    c: number[];
                };
                "1673312400": {
                    v: number[];
                    c: number[];
                };
                "1673323200": {
                    v: number[];
                    c: number[];
                };
                "1673334000": {
                    v: number[];
                    c: number[];
                };
                "1673344800": {
                    v: number[];
                    c: number[];
                };
                "1673359200": {
                    v: number[];
                    c: number[];
                };
                "1673370000": {
                    v: number[];
                    c: number[];
                };
                "1673380800": {
                    v: number[];
                    c: number[];
                };
                "1673391600": {
                    v: number[];
                    c: number[];
                };
                "1673402400": {
                    v: number[];
                    c: number[];
                };
                "1673416800": {
                    v: number[];
                    c: number[];
                };
                "1673427600": {
                    v: number[];
                    c: number[];
                };
                "1673438400": {
                    v: number[];
                    c: number[];
                };
                "1673449200": {
                    v: number[];
                    c: number[];
                };
                "1673463600": {
                    v: number[];
                    c: number[];
                };
                "1673474400": {
                    v: number[];
                    c: number[];
                };
                "1673485200": {
                    v: number[];
                    c: number[];
                };
                "1673496000": {
                    v: number[];
                    c: number[];
                };
                "1673506800": {
                    v: number[];
                    c: number[];
                };
                "1673521200": {
                    v: number[];
                    c: number[];
                };
                "1673532000": {
                    v: number[];
                    c: number[];
                };
                "1673542800": {
                    v: number[];
                    c: number[];
                };
                "1673553600": {
                    v: number[];
                    c: number[];
                };
                "1673568000": {
                    v: number[];
                    c: number[];
                };
                "1673578800": {
                    v: number[];
                    c: number[];
                };
                "1673589600": {
                    v: number[];
                    c: number[];
                };
                "1673600400": {
                    v: number[];
                    c: number[];
                };
                "1673611200": {
                    v: number[];
                    c: number[];
                };
                "1673625600": {
                    v: number[];
                    c: number[];
                };
                "1673636400": {
                    v: number[];
                    c: number[];
                };
                "1673647200": {
                    v: number[];
                    c: number[];
                };
                "1673658000": {
                    v: number[];
                    c: number[];
                };
                "1673672400": {
                    v: number[];
                    c: number[];
                };
                "1673683200": {
                    v: number[];
                    c: number[];
                };
                "1673694000": {
                    v: number[];
                    c: number[];
                };
                "1673704800": {
                    v: number[];
                    c: number[];
                };
                "1673719200": {
                    v: number[];
                    c: number[];
                };
                "1673730000": {
                    v: number[];
                    c: number[];
                };
                "1673740800": {
                    v: number[];
                    c: number[];
                };
                "1673751600": {
                    v: number[];
                    c: number[];
                };
                "1673762400": {
                    v: number[];
                    c: number[];
                };
                "1673776800": {
                    v: number[];
                    c: number[];
                };
                "1673787600": {
                    v: number[];
                    c: number[];
                };
                "1673798400": {
                    v: number[];
                    c: number[];
                };
                "1673809200": {
                    v: number[];
                    c: number[];
                };
                "1673823600": {
                    v: number[];
                    c: number[];
                };
                "1673834400": {
                    v: number[];
                    c: number[];
                };
                "1673845200": {
                    v: number[];
                    c: number[];
                };
                "1673856000": {
                    v: number[];
                    c: number[];
                };
                "1673866800": {
                    v: number[];
                    c: number[];
                };
                "1673881200": {
                    v: number[];
                    c: number[];
                };
                "1673892000": {
                    v: number[];
                    c: number[];
                };
                "1673902800": {
                    v: number[];
                    c: number[];
                };
                "1673913600": {
                    v: number[];
                    c: number[];
                };
                "1673928000": {
                    v: number[];
                    c: number[];
                };
                "1673938800": {
                    v: number[];
                    c: number[];
                };
                "1673949600": {
                    v: number[];
                    c: number[];
                };
                "1673960400": {
                    v: number[];
                    c: number[];
                };
                "1673971200": {
                    v: number[];
                    c: number[];
                };
                "1673985600": {
                    v: number[];
                    c: number[];
                };
                "1673996400": {
                    v: number[];
                    c: number[];
                };
                "1674007200": {
                    v: number[];
                    c: number[];
                };
                "1674018000": {
                    v: number[];
                    c: number[];
                };
                "1674032400": {
                    v: number[];
                    c: number[];
                };
                "1674043200": {
                    v: number[];
                    c: number[];
                };
                "1674054000": {
                    v: number[];
                    c: number[];
                };
                "1674064800": {
                    v: number[];
                    c: number[];
                };
                "1674075600": {
                    v: number[];
                    c: number[];
                };
                "1674090000": {
                    v: number[];
                    c: number[];
                };
                "1674100800": {
                    v: number[];
                    c: number[];
                };
                "1674111600": {
                    v: number[];
                    c: number[];
                };
                "1674122400": {
                    v: number[];
                    c: number[];
                };
                "1674136800": {
                    v: number[];
                    c: number[];
                };
                "1674147600": {
                    v: number[];
                    c: number[];
                };
                "1674158400": {
                    v: number[];
                    c: number[];
                };
                "1674169200": {
                    v: number[];
                    c: number[];
                };
                "1674183600": {
                    v: number[];
                    c: number[];
                };
                "1674194400": {
                    v: number[];
                    c: number[];
                };
                "1674205200": {
                    v: number[];
                    c: number[];
                };
                "1674216000": {
                    v: number[];
                    c: number[];
                };
                "1674226800": {
                    v: number[];
                    c: number[];
                };
                "1674241200": {
                    v: number[];
                    c: number[];
                };
                "1674252000": {
                    v: number[];
                    c: number[];
                };
                "1674262800": {
                    v: number[];
                    c: number[];
                };
                "1674273600": {
                    v: number[];
                    c: number[];
                };
                "1674288000": {
                    v: number[];
                    c: number[];
                };
                "1674298800": {
                    v: number[];
                    c: number[];
                };
                "1674309600": {
                    v: number[];
                    c: number[];
                };
                "1674320400": {
                    v: number[];
                    c: number[];
                };
                "1674331200": {
                    v: number[];
                    c: number[];
                };
                "1674345600": {
                    v: number[];
                    c: number[];
                };
                "1674356400": {
                    v: number[];
                    c: number[];
                };
                "1674367200": {
                    v: number[];
                    c: number[];
                };
                "1674378000": {
                    v: number[];
                    c: number[];
                };
                "1674392400": {
                    v: number[];
                    c: number[];
                };
                "1674403200": {
                    v: number[];
                    c: number[];
                };
                "1674414000": {
                    v: number[];
                    c: number[];
                };
                "1674424800": {
                    v: number[];
                    c: number[];
                };
                "1674435600": {
                    v: number[];
                    c: number[];
                };
                "1674450000": {
                    v: number[];
                    c: number[];
                };
                "1674460800": {
                    v: number[];
                    c: number[];
                };
                "1674471600": {
                    v: number[];
                    c: number[];
                };
                "1674482400": {
                    v: number[];
                    c: number[];
                };
                "1674496800": {
                    v: number[];
                    c: number[];
                };
                "1674507600": {
                    v: number[];
                    c: number[];
                };
                "1674518400": {
                    v: number[];
                    c: number[];
                };
                "1674529200": {
                    v: number[];
                    c: number[];
                };
                "1674543600": {
                    v: number[];
                    c: number[];
                };
                "1674554400": {
                    v: number[];
                    c: number[];
                };
                "1674565200": {
                    v: number[];
                    c: number[];
                };
                "1674576000": {
                    v: number[];
                    c: number[];
                };
                "1674586800": {
                    v: number[];
                    c: number[];
                };
                "1674601200": {
                    v: number[];
                    c: number[];
                };
                "1674612000": {
                    v: number[];
                    c: number[];
                };
                "1674622800": {
                    v: number[];
                    c: number[];
                };
                "1674633600": {
                    v: number[];
                    c: number[];
                };
                "1674648000": {
                    v: number[];
                    c: number[];
                };
                "1674658800": {
                    v: number[];
                    c: number[];
                };
                "1674669600": {
                    v: number[];
                    c: number[];
                };
                "1674680400": {
                    v: number[];
                    c: number[];
                };
                "1674691200": {
                    v: number[];
                    c: number[];
                };
                "1674705600": {
                    v: number[];
                    c: number[];
                };
                "1674716400": {
                    v: number[];
                    c: number[];
                };
                "1674727200": {
                    v: number[];
                    c: number[];
                };
                "1674738000": {
                    v: number[];
                    c: number[];
                };
                "1674752400": {
                    v: number[];
                    c: number[];
                };
                "1674763200": {
                    v: number[];
                    c: number[];
                };
                "1674774000": {
                    v: number[];
                    c: number[];
                };
                "1674784800": {
                    v: number[];
                    c: number[];
                };
                "1674795600": {
                    v: number[];
                    c: number[];
                };
                "1674810000": {
                    v: number[];
                    c: number[];
                };
                "1674820800": {
                    v: number[];
                    c: number[];
                };
                "1674831600": {
                    v: number[];
                    c: number[];
                };
                "1674842400": {
                    v: number[];
                    c: number[];
                };
                "1674856800": {
                    v: number[];
                    c: number[];
                };
                "1674867600": {
                    v: number[];
                    c: number[];
                };
                "1674878400": {
                    v: number[];
                    c: number[];
                };
                "1674889200": {
                    v: number[];
                    c: number[];
                };
                "1674903600": {
                    v: number[];
                    c: number[];
                };
                "1674914400": {
                    v: number[];
                    c: number[];
                };
                "1674925200": {
                    v: number[];
                    c: number[];
                };
                "1674936000": {
                    v: number[];
                    c: number[];
                };
                "1674946800": {
                    v: number[];
                    c: number[];
                };
                "1674961200": {
                    v: number[];
                    c: number[];
                };
                "1674972000": {
                    v: number[];
                    c: number[];
                };
                "1674982800": {
                    v: number[];
                    c: number[];
                };
                "1674993600": {
                    v: number[];
                    c: number[];
                };
                "1675008000": {
                    v: number[];
                    c: number[];
                };
                "1675018800": {
                    v: number[];
                    c: number[];
                };
                "1675029600": {
                    v: number[];
                    c: number[];
                };
                "1675040400": {
                    v: number[];
                    c: number[];
                };
                "1675051200": {
                    v: number[];
                    c: number[];
                };
                "1675065600": {
                    v: number[];
                    c: number[];
                };
                "1675076400": {
                    v: number[];
                    c: number[];
                };
                "1675087200": {
                    v: number[];
                    c: number[];
                };
                "1675098000": {
                    v: number[];
                    c: number[];
                };
                "1675112400": {
                    v: number[];
                    c: number[];
                };
                "1675123200": {
                    v: number[];
                    c: number[];
                };
                "1675134000": {
                    v: number[];
                    c: number[];
                };
                "1675144800": {
                    v: number[];
                    c: number[];
                };
                "1675155600": {
                    v: number[];
                    c: number[];
                };
                "1675170000": {
                    v: number[];
                    c: number[];
                };
                "1675180800": {
                    v: number[];
                    c: number[];
                };
                "1675191600": {
                    v: number[];
                    c: number[];
                };
                "1675202400": {
                    v: number[];
                    c: number[];
                };
                "1675216800": {
                    v: number[];
                    c: number[];
                };
                "1675227600": {
                    v: number[];
                    c: number[];
                };
                "1675238400": {
                    v: number[];
                    c: number[];
                };
                "1675249200": {
                    v: number[];
                    c: number[];
                };
                "1675263600": {
                    v: number[];
                    c: number[];
                };
                "1675274400": {
                    v: number[];
                    c: number[];
                };
                "1675285200": {
                    v: number[];
                    c: number[];
                };
                "1675296000": {
                    v: number[];
                    c: number[];
                };
                "1675306800": {
                    v: number[];
                    c: number[];
                };
                "1675321200": {
                    v: number[];
                    c: number[];
                };
                "1675332000": {
                    v: number[];
                    c: number[];
                };
                "1675342800": {
                    v: number[];
                    c: number[];
                };
                "1675353600": {
                    v: number[];
                    c: number[];
                };
                "1675368000": {
                    v: number[];
                    c: number[];
                };
                "1675378800": {
                    v: number[];
                    c: number[];
                };
                "1675389600": {
                    v: number[];
                    c: number[];
                };
                "1675400400": {
                    v: number[];
                    c: number[];
                };
                "1675411200": {
                    v: number[];
                    c: number[];
                };
                "1675425600": {
                    v: number[];
                    c: number[];
                };
                "1675436400": {
                    v: number[];
                    c: number[];
                };
                "1675447200": {
                    v: number[];
                    c: number[];
                };
                "1675458000": {
                    v: number[];
                    c: number[];
                };
                "1675472400": {
                    v: number[];
                    c: number[];
                };
                "1675483200": {
                    v: number[];
                    c: number[];
                };
                "1675494000": {
                    v: number[];
                    c: number[];
                };
                "1675504800": {
                    v: number[];
                    c: number[];
                };
                "1675515600": {
                    v: number[];
                    c: number[];
                };
                "1675530000": {
                    v: number[];
                    c: number[];
                };
                "1675540800": {
                    v: number[];
                    c: number[];
                };
                "1675551600": {
                    v: number[];
                    c: number[];
                };
                "1675562400": {
                    v: number[];
                    c: number[];
                };
                "1675576800": {
                    v: number[];
                    c: number[];
                };
                "1675587600": {
                    v: number[];
                    c: number[];
                };
                "1675598400": {
                    v: number[];
                    c: number[];
                };
                "1675609200": {
                    v: number[];
                    c: number[];
                };
                "1675620000": {
                    v: number[];
                    c: number[];
                };
                "1675634400": {
                    v: number[];
                    c: number[];
                };
                "1675645200": {
                    v: number[];
                    c: number[];
                };
                "1675656000": {
                    v: number[];
                    c: number[];
                };
                "1675666800": {
                    v: number[];
                    c: number[];
                };
                "1675681200": {
                    v: number[];
                    c: number[];
                };
                "1675692000": {
                    v: number[];
                    c: number[];
                };
                "1675702800": {
                    v: number[];
                    c: number[];
                };
                "1675713600": {
                    v: number[];
                    c: number[];
                };
                "1675728000": {
                    v: number[];
                    c: number[];
                };
                "1675738800": {
                    v: number[];
                    c: number[];
                };
                "1675749600": {
                    v: number[];
                    c: number[];
                };
                "1675760400": {
                    v: number[];
                    c: number[];
                };
                "1675771200": {
                    v: number[];
                    c: number[];
                };
                "1675785600": {
                    v: number[];
                    c: number[];
                };
                "1675796400": {
                    v: number[];
                    c: number[];
                };
                "1675807200": {
                    v: number[];
                    c: number[];
                };
                "1675818000": {
                    v: number[];
                    c: number[];
                };
                "1675832400": {
                    v: number[];
                    c: number[];
                };
                "1675843200": {
                    v: number[];
                    c: number[];
                };
                "1675854000": {
                    v: number[];
                    c: number[];
                };
                "1675864800": {
                    v: number[];
                    c: number[];
                };
                "1675875600": {
                    v: number[];
                    c: number[];
                };
                "1675890000": {
                    v: number[];
                    c: number[];
                };
                "1675900800": {
                    v: number[];
                    c: number[];
                };
                "1675911600": {
                    v: number[];
                    c: number[];
                };
                "1675922400": {
                    v: number[];
                    c: number[];
                };
                "1675936800": {
                    v: number[];
                    c: number[];
                };
                "1675947600": {
                    v: number[];
                    c: number[];
                };
                "1675958400": {
                    v: number[];
                    c: number[];
                };
                "1675969200": {
                    v: number[];
                    c: number[];
                };
                "1675980000": {
                    v: number[];
                    c: number[];
                };
                "1675994400": {
                    v: number[];
                    c: number[];
                };
                "1676005200": {
                    v: number[];
                    c: number[];
                };
                "1676016000": {
                    v: number[];
                    c: number[];
                };
                "1676026800": {
                    v: number[];
                    c: number[];
                };
                "1676041200": {
                    v: number[];
                    c: number[];
                };
                "1676052000": {
                    v: number[];
                    c: number[];
                };
                "1676062800": {
                    v: number[];
                    c: number[];
                };
                "1676073600": {
                    v: number[];
                    c: number[];
                };
                "1676088000": {
                    v: number[];
                    c: number[];
                };
                "1676098800": {
                    v: number[];
                    c: number[];
                };
                "1676109600": {
                    v: number[];
                    c: number[];
                };
                "1676120400": {
                    v: number[];
                    c: number[];
                };
                "1676131200": {
                    v: number[];
                    c: number[];
                };
                "1676145600": {
                    v: number[];
                    c: number[];
                };
                "1676156400": {
                    v: number[];
                    c: number[];
                };
                "1676167200": {
                    v: number[];
                    c: number[];
                };
                "1676178000": {
                    v: number[];
                    c: number[];
                };
                "1676192400": {
                    v: number[];
                    c: number[];
                };
                "1676203200": {
                    v: number[];
                    c: number[];
                };
                "1676214000": {
                    v: number[];
                    c: number[];
                };
                "1676224800": {
                    v: number[];
                    c: number[];
                };
                "1676235600": {
                    v: number[];
                    c: number[];
                };
                "1676250000": {
                    v: number[];
                    c: number[];
                };
                "1676260800": {
                    v: number[];
                    c: number[];
                };
                "1676271600": {
                    v: number[];
                    c: number[];
                };
                "1676282400": {
                    v: number[];
                    c: number[];
                };
                "1676296800": {
                    v: number[];
                    c: number[];
                };
                "1676307600": {
                    v: number[];
                    c: number[];
                };
                "1676318400": {
                    v: number[];
                    c: number[];
                };
                "1676329200": {
                    v: number[];
                    c: number[];
                };
                "1676340000": {
                    v: number[];
                    c: number[];
                };
                "1676354400": {
                    v: number[];
                    c: number[];
                };
                "1676365200": {
                    v: number[];
                    c: number[];
                };
                "1676376000": {
                    v: number[];
                    c: number[];
                };
                "1676386800": {
                    v: number[];
                    c: number[];
                };
                "1676401200": {
                    v: number[];
                    c: number[];
                };
                "1676412000": {
                    v: number[];
                    c: number[];
                };
                "1676422800": {
                    v: number[];
                    c: number[];
                };
                "1676433600": {
                    v: number[];
                    c: number[];
                };
                "1676448000": {
                    v: number[];
                    c: number[];
                };
                "1676458800": {
                    v: number[];
                    c: number[];
                };
                "1676469600": {
                    v: number[];
                    c: number[];
                };
                "1676480400": {
                    v: number[];
                    c: number[];
                };
                "1676491200": {
                    v: number[];
                    c: number[];
                };
                "1676505600": {
                    v: number[];
                    c: number[];
                };
                "1676516400": {
                    v: number[];
                    c: number[];
                };
                "1676527200": {
                    v: number[];
                    c: number[];
                };
                "1676538000": {
                    v: number[];
                    c: number[];
                };
                "1676552400": {
                    v: number[];
                    c: number[];
                };
                "1676563200": {
                    v: number[];
                    c: number[];
                };
                "1676574000": {
                    v: number[];
                    c: number[];
                };
                "1676584800": {
                    v: number[];
                    c: number[];
                };
                "1676595600": {
                    v: number[];
                    c: number[];
                };
                "1676610000": {
                    v: number[];
                    c: number[];
                };
                "1676620800": {
                    v: number[];
                    c: number[];
                };
                "1676631600": {
                    v: number[];
                    c: number[];
                };
                "1676642400": {
                    v: number[];
                    c: number[];
                };
                "1676656800": {
                    v: number[];
                    c: number[];
                };
                "1676667600": {
                    v: number[];
                    c: number[];
                };
                "1676678400": {
                    v: number[];
                    c: number[];
                };
                "1676689200": {
                    v: number[];
                    c: number[];
                };
                "1676700000": {
                    v: number[];
                    c: number[];
                };
                "1676714400": {
                    v: number[];
                    c: number[];
                };
                "1676725200": {
                    v: number[];
                    c: number[];
                };
                "1676736000": {
                    v: number[];
                    c: number[];
                };
                "1676746800": {
                    v: number[];
                    c: number[];
                };
                "1676761200": {
                    v: number[];
                    c: number[];
                };
                "1676772000": {
                    v: number[];
                    c: number[];
                };
                "1676782800": {
                    v: number[];
                    c: number[];
                };
                "1676793600": {
                    v: number[];
                    c: number[];
                };
                "1676808000": {
                    v: number[];
                    c: number[];
                };
                "1676818800": {
                    v: number[];
                    c: number[];
                };
                "1676829600": {
                    v: number[];
                    c: number[];
                };
                "1676840400": {
                    v: number[];
                    c: number[];
                };
                "1676851200": {
                    v: number[];
                    c: number[];
                };
                "1676865600": {
                    v: number[];
                    c: number[];
                };
                "1676876400": {
                    v: number[];
                    c: number[];
                };
                "1676887200": {
                    v: number[];
                    c: number[];
                };
                "1676898000": {
                    v: number[];
                    c: number[];
                };
                "1676912400": {
                    v: number[];
                    c: number[];
                };
                "1676923200": {
                    v: number[];
                    c: number[];
                };
                "1676934000": {
                    v: number[];
                    c: number[];
                };
                "1676944800": {
                    v: number[];
                    c: number[];
                };
                "1676955600": {
                    v: number[];
                    c: number[];
                };
                "1676970000": {
                    v: number[];
                    c: number[];
                };
                "1676980800": {
                    v: number[];
                    c: number[];
                };
                "1676991600": {
                    v: number[];
                    c: number[];
                };
                "1677002400": {
                    v: number[];
                    c: number[];
                };
                "1677016800": {
                    v: number[];
                    c: number[];
                };
                "1677027600": {
                    v: number[];
                    c: number[];
                };
                "1677038400": {
                    v: number[];
                    c: number[];
                };
                "1677049200": {
                    v: number[];
                    c: number[];
                };
                "1677060000": {
                    v: number[];
                    c: number[];
                };
                "1677074400": {
                    v: number[];
                    c: number[];
                };
                "1677085200": {
                    v: number[];
                    c: number[];
                };
                "1677096000": {
                    v: number[];
                    c: number[];
                };
                "1677106800": {
                    v: number[];
                    c: number[];
                };
                "1677121200": {
                    v: number[];
                    c: number[];
                };
                "1677132000": {
                    v: number[];
                    c: number[];
                };
                "1677142800": {
                    v: number[];
                    c: number[];
                };
                "1677153600": {
                    v: number[];
                    c: number[];
                };
                "1677164400": {
                    v: number[];
                    c: number[];
                };
                "1677178800": {
                    v: number[];
                    c: number[];
                };
                "1677189600": {
                    v: number[];
                    c: number[];
                };
                "1677200400": {
                    v: number[];
                    c: number[];
                };
                "1677211200": {
                    v: number[];
                    c: number[];
                };
                "1677225600": {
                    v: number[];
                    c: number[];
                };
                "1677236400": {
                    v: number[];
                    c: number[];
                };
                "1677247200": {
                    v: number[];
                    c: number[];
                };
                "1677258000": {
                    v: number[];
                    c: number[];
                };
                "1677272400": {
                    v: number[];
                    c: number[];
                };
                "1677283200": {
                    v: number[];
                    c: number[];
                };
                "1677294000": {
                    v: number[];
                    c: number[];
                };
                "1677304800": {
                    v: number[];
                    c: number[];
                };
                "1677315600": {
                    v: number[];
                    c: number[];
                };
                "1677330000": {
                    v: number[];
                    c: number[];
                };
                "1677340800": {
                    v: number[];
                    c: number[];
                };
                "1677351600": {
                    v: number[];
                    c: number[];
                };
                "1677362400": {
                    v: number[];
                    c: number[];
                };
                "1677376800": {
                    v: number[];
                    c: number[];
                };
                "1677387600": {
                    v: number[];
                    c: number[];
                };
                "1677398400": {
                    v: number[];
                    c: number[];
                };
                "1677409200": {
                    v: number[];
                    c: number[];
                };
                "1677420000": {
                    v: number[];
                    c: number[];
                };
                "1677434400": {
                    v: number[];
                    c: number[];
                };
                "1677445200": {
                    v: number[];
                    c: number[];
                };
                "1677456000": {
                    v: number[];
                    c: number[];
                };
                "1677466800": {
                    v: number[];
                    c: number[];
                };
                "1677481200": {
                    v: number[];
                    c: number[];
                };
                "1677492000": {
                    v: number[];
                    c: number[];
                };
                "1677502800": {
                    v: number[];
                    c: number[];
                };
                "1677513600": {
                    v: number[];
                    c: number[];
                };
                "1677524400": {
                    v: number[];
                    c: number[];
                };
                "1677538800": {
                    v: number[];
                    c: number[];
                };
                "1677549600": {
                    v: number[];
                    c: number[];
                };
                "1677560400": {
                    v: number[];
                    c: number[];
                };
                "1677571200": {
                    v: number[];
                    c: number[];
                };
                "1677585600": {
                    v: number[];
                    c: number[];
                };
                "1677596400": {
                    v: number[];
                    c: number[];
                };
                "1677607200": {
                    v: number[];
                    c: number[];
                };
                "1677618000": {
                    v: number[];
                    c: number[];
                };
                "1677632400": {
                    v: number[];
                    c: number[];
                };
                "1677643200": {
                    v: number[];
                    c: number[];
                };
                "1677654000": {
                    v: number[];
                    c: number[];
                };
                "1677664800": {
                    v: number[];
                    c: number[];
                };
                "1677675600": {
                    v: number[];
                    c: number[];
                };
                "1677690000": {
                    v: number[];
                    c: number[];
                };
                "1677700800": {
                    v: number[];
                    c: number[];
                };
                "1677711600": {
                    v: number[];
                    c: number[];
                };
                "1677722400": {
                    v: number[];
                    c: number[];
                };
                "1677736800": {
                    v: number[];
                    c: number[];
                };
                "1677747600": {
                    v: number[];
                    c: number[];
                };
                "1677758400": {
                    v: number[];
                    c: number[];
                };
                "1677769200": {
                    v: number[];
                    c: number[];
                };
                "1677780000": {
                    v: number[];
                    c: number[];
                };
                "1677794400": {
                    v: number[];
                    c: number[];
                };
                "1677805200": {
                    v: number[];
                    c: number[];
                };
                "1677816000": {
                    v: number[];
                    c: number[];
                };
                "1677826800": {
                    v: number[];
                    c: number[];
                };
                "1677841200": {
                    v: number[];
                    c: number[];
                };
                "1677852000": {
                    v: number[];
                    c: number[];
                };
                "1677862800": {
                    v: number[];
                    c: number[];
                };
                "1677873600": {
                    v: number[];
                    c: number[];
                };
                "1677884400": {
                    v: number[];
                    c: number[];
                };
                "1677898800": {
                    v: number[];
                    c: number[];
                };
                "1677909600": {
                    v: number[];
                    c: number[];
                };
                "1677920400": {
                    v: number[];
                    c: number[];
                };
                "1677931200": {
                    v: number[];
                    c: number[];
                };
                "1677945600": {
                    v: number[];
                    c: number[];
                };
                "1677956400": {
                    v: number[];
                    c: number[];
                };
                "1677967200": {
                    v: number[];
                    c: number[];
                };
                "1677978000": {
                    v: number[];
                    c: number[];
                };
                "1677992400": {
                    v: number[];
                    c: number[];
                };
                "1678003200": {
                    v: number[];
                    c: number[];
                };
                "1678014000": {
                    v: number[];
                    c: number[];
                };
                "1678024800": {
                    v: number[];
                    c: number[];
                };
                "1678035600": {
                    v: number[];
                    c: number[];
                };
                "1678050000": {
                    v: number[];
                    c: number[];
                };
                "1678060800": {
                    v: number[];
                    c: number[];
                };
                "1678071600": {
                    v: number[];
                    c: number[];
                };
                "1678082400": {
                    v: number[];
                    c: number[];
                };
                "1678096800": {
                    v: number[];
                    c: number[];
                };
                "1678107600": {
                    v: number[];
                    c: number[];
                };
                "1678118400": {
                    v: number[];
                    c: number[];
                };
                "1678129200": {
                    v: number[];
                    c: number[];
                };
                "1678140000": {
                    v: number[];
                    c: number[];
                };
                "1678154400": {
                    v: number[];
                    c: number[];
                };
                "1678165200": {
                    v: number[];
                    c: number[];
                };
                "1678176000": {
                    v: number[];
                    c: number[];
                };
                "1678186800": {
                    v: number[];
                    c: number[];
                };
                "1678201200": {
                    v: number[];
                    c: number[];
                };
                "1678212000": {
                    v: number[];
                    c: number[];
                };
                "1678222800": {
                    v: number[];
                    c: number[];
                };
                "1678233600": {
                    v: number[];
                    c: number[];
                };
                "1678244400": {
                    v: number[];
                    c: number[];
                };
                "1678258800": {
                    v: number[];
                    c: number[];
                };
                "1678269600": {
                    v: number[];
                    c: number[];
                };
                "1678280400": {
                    v: number[];
                    c: number[];
                };
                "1678291200": {
                    v: number[];
                    c: number[];
                };
                "1678305600": {
                    v: number[];
                    c: number[];
                };
                "1678316400": {
                    v: number[];
                    c: number[];
                };
                "1678327200": {
                    v: number[];
                    c: number[];
                };
                "1678338000": {
                    v: number[];
                    c: number[];
                };
                "1678352400": {
                    v: number[];
                    c: number[];
                };
                "1678363200": {
                    v: number[];
                    c: number[];
                };
                "1678374000": {
                    v: number[];
                    c: number[];
                };
                "1678384800": {
                    v: number[];
                    c: number[];
                };
                "1678395600": {
                    v: number[];
                    c: number[];
                };
                "1678410000": {
                    v: number[];
                    c: number[];
                };
                "1678420800": {
                    v: number[];
                    c: number[];
                };
                "1678431600": {
                    v: number[];
                    c: number[];
                };
                "1678442400": {
                    v: number[];
                    c: number[];
                };
                "1678456800": {
                    v: number[];
                    c: number[];
                };
                "1678467600": {
                    v: number[];
                    c: number[];
                };
                "1678478400": {
                    v: number[];
                    c: number[];
                };
                "1678489200": {
                    v: number[];
                    c: number[];
                };
                "1678500000": {
                    v: number[];
                    c: number[];
                };
                "1678514400": {
                    v: number[];
                    c: number[];
                };
                "1678525200": {
                    v: number[];
                    c: number[];
                };
                "1678536000": {
                    v: number[];
                    c: number[];
                };
                "1678546800": {
                    v: number[];
                    c: number[];
                };
                "1678561200": {
                    v: number[];
                    c: number[];
                };
                "1678572000": {
                    v: number[];
                    c: number[];
                };
                "1678582800": {
                    v: number[];
                    c: number[];
                };
                "1678593600": {
                    v: number[];
                    c: number[];
                };
                "1678604400": {
                    v: number[];
                    c: number[];
                };
                "1678618800": {
                    v: number[];
                    c: number[];
                };
                "1678629600": {
                    v: number[];
                    c: number[];
                };
                "1678640400": {
                    v: number[];
                    c: number[];
                };
                "1678651200": {
                    v: number[];
                    c: number[];
                };
                "1678665600": {
                    v: number[];
                    c: number[];
                };
                "1678676400": {
                    v: number[];
                    c: number[];
                };
                "1678687200": {
                    v: number[];
                    c: number[];
                };
                "1678698000": {
                    v: number[];
                    c: number[];
                };
                "1678708800": {
                    v: number[];
                    c: number[];
                };
                "1678723200": {
                    v: number[];
                    c: number[];
                };
                "1678734000": {
                    v: number[];
                    c: number[];
                };
                "1678744800": {
                    v: number[];
                    c: number[];
                };
                "1678755600": {
                    v: number[];
                    c: number[];
                };
                "1678770000": {
                    v: number[];
                    c: number[];
                };
                "1678780800": {
                    v: number[];
                    c: number[];
                };
                "1678791600": {
                    v: number[];
                    c: number[];
                };
                "1678802400": {
                    v: number[];
                    c: number[];
                };
                "1678816800": {
                    v: number[];
                    c: number[];
                };
                "1678827600": {
                    v: number[];
                    c: number[];
                };
                "1678838400": {
                    v: number[];
                    c: number[];
                };
                "1678849200": {
                    v: number[];
                    c: number[];
                };
                "1678860000": {
                    v: number[];
                    c: number[];
                };
                "1678874400": {
                    v: number[];
                    c: number[];
                };
                "1678885200": {
                    v: number[];
                    c: number[];
                };
                "1678896000": {
                    v: number[];
                    c: number[];
                };
                "1678906800": {
                    v: number[];
                    c: number[];
                };
                "1678921200": {
                    v: number[];
                    c: number[];
                };
                "1678932000": {
                    v: number[];
                    c: number[];
                };
                "1678942800": {
                    v: number[];
                    c: number[];
                };
                "1678953600": {
                    v: number[];
                    c: number[];
                };
                "1678964400": {
                    v: number[];
                    c: number[];
                };
                "1678978800": {
                    v: number[];
                    c: number[];
                };
                "1678989600": {
                    v: number[];
                    c: number[];
                };
                "1679000400": {
                    v: number[];
                    c: number[];
                };
                "1679011200": {
                    v: number[];
                    c: number[];
                };
                "1679025600": {
                    v: number[];
                    c: number[];
                };
                "1679036400": {
                    v: number[];
                    c: number[];
                };
                "1679047200": {
                    v: number[];
                    c: number[];
                };
                "1679058000": {
                    v: number[];
                    c: number[];
                };
                "1679068800": {
                    v: number[];
                    c: number[];
                };
                "1679083200": {
                    v: number[];
                    c: number[];
                };
                "1679094000": {
                    v: number[];
                    c: number[];
                };
                "1679104800": {
                    v: number[];
                    c: number[];
                };
                "1679115600": {
                    v: number[];
                    c: number[];
                };
                "1679130000": {
                    v: number[];
                    c: number[];
                };
                "1679140800": {
                    v: number[];
                    c: number[];
                };
                "1679151600": {
                    v: number[];
                    c: number[];
                };
                "1679162400": {
                    v: number[];
                    c: number[];
                };
                "1679176800": {
                    v: number[];
                    c: number[];
                };
                "1679187600": {
                    v: number[];
                    c: number[];
                };
                "1679198400": {
                    v: number[];
                    c: number[];
                };
                "1679209200": {
                    v: number[];
                    c: number[];
                };
                "1679220000": {
                    v: number[];
                    c: number[];
                };
                "1679234400": {
                    v: number[];
                    c: number[];
                };
                "1679245200": {
                    v: number[];
                    c: number[];
                };
                "1679256000": {
                    v: number[];
                    c: number[];
                };
                "1679266800": {
                    v: number[];
                    c: number[];
                };
                "1679281200": {
                    v: number[];
                    c: number[];
                };
                "1679292000": {
                    v: number[];
                    c: number[];
                };
                "1679302800": {
                    v: number[];
                    c: number[];
                };
                "1679313600": {
                    v: number[];
                    c: number[];
                };
                "1679324400": {
                    v: number[];
                    c: number[];
                };
                "1679338800": {
                    v: number[];
                    c: number[];
                };
                "1679349600": {
                    v: number[];
                    c: number[];
                };
                "1679360400": {
                    v: number[];
                    c: number[];
                };
                "1679371200": {
                    v: number[];
                    c: number[];
                };
                "1679385600": {
                    v: number[];
                    c: number[];
                };
                "1679396400": {
                    v: number[];
                    c: number[];
                };
                "1679407200": {
                    v: number[];
                    c: number[];
                };
                "1679418000": {
                    v: number[];
                    c: number[];
                };
                "1679428800": {
                    v: number[];
                    c: number[];
                };
                "1679443200": {
                    v: number[];
                    c: number[];
                };
                "1679454000": {
                    v: number[];
                    c: number[];
                };
                "1679464800": {
                    v: number[];
                    c: number[];
                };
                "1679475600": {
                    v: number[];
                    c: number[];
                };
                "1679490000": {
                    v: number[];
                    c: number[];
                };
                "1679500800": {
                    v: number[];
                    c: number[];
                };
                "1679511600": {
                    v: number[];
                    c: number[];
                };
                "1679522400": {
                    v: number[];
                    c: number[];
                };
                "1679536800": {
                    v: number[];
                    c: number[];
                };
                "1679547600": {
                    v: number[];
                    c: number[];
                };
                "1679558400": {
                    v: number[];
                    c: number[];
                };
                "1679569200": {
                    v: number[];
                    c: number[];
                };
                "1679580000": {
                    v: number[];
                    c: number[];
                };
                "1679594400": {
                    v: number[];
                    c: number[];
                };
                "1679605200": {
                    v: number[];
                    c: number[];
                };
                "1679616000": {
                    v: number[];
                    c: number[];
                };
                "1679626800": {
                    v: number[];
                    c: number[];
                };
                "1679641200": {
                    v: number[];
                    c: number[];
                };
                "1679652000": {
                    v: number[];
                    c: number[];
                };
                "1679662800": {
                    v: number[];
                    c: number[];
                };
                "1679673600": {
                    v: number[];
                    c: number[];
                };
                "1679684400": {
                    v: number[];
                    c: number[];
                };
                "1679698800": {
                    v: number[];
                    c: number[];
                };
                "1679709600": {
                    v: number[];
                    c: number[];
                };
                "1679720400": {
                    v: number[];
                    c: number[];
                };
                "1679731200": {
                    v: number[];
                    c: number[];
                };
                "1679745600": {
                    v: number[];
                    c: number[];
                };
                "1679756400": {
                    v: number[];
                    c: number[];
                };
                "1679767200": {
                    v: number[];
                    c: number[];
                };
                "1679778000": {
                    v: number[];
                    c: number[];
                };
                "1679788800": {
                    v: number[];
                    c: number[];
                };
                "1679803200": {
                    v: number[];
                    c: number[];
                };
                "1679814000": {
                    v: number[];
                    c: number[];
                };
                "1679824800": {
                    v: number[];
                    c: number[];
                };
                "1679835600": {
                    v: number[];
                    c: number[];
                };
                "1679850000": {
                    v: number[];
                    c: number[];
                };
                "1679860800": {
                    v: number[];
                    c: number[];
                };
                "1679871600": {
                    v: number[];
                    c: number[];
                };
                "1679882400": {
                    v: number[];
                    c: number[];
                };
                "1679896800": {
                    v: number[];
                    c: number[];
                };
                "1679907600": {
                    v: number[];
                    c: number[];
                };
                "1679918400": {
                    v: number[];
                    c: number[];
                };
                "1679929200": {
                    v: number[];
                    c: number[];
                };
                "1679940000": {
                    v: number[];
                    c: number[];
                };
                "1679954400": {
                    v: number[];
                    c: number[];
                };
                "1679965200": {
                    v: number[];
                    c: number[];
                };
                "1679976000": {
                    v: number[];
                    c: number[];
                };
                "1679986800": {
                    v: number[];
                    c: number[];
                };
                "1680001200": {
                    v: number[];
                    c: number[];
                };
                "1680012000": {
                    v: number[];
                    c: number[];
                };
                "1680022800": {
                    v: number[];
                    c: number[];
                };
                "1680033600": {
                    v: number[];
                    c: number[];
                };
                "1680044400": {
                    v: number[];
                    c: number[];
                };
                "1680058800": {
                    v: number[];
                    c: number[];
                };
                "1680069600": {
                    v: number[];
                    c: number[];
                };
                "1680080400": {
                    v: number[];
                    c: number[];
                };
                "1680091200": {
                    v: number[];
                    c: number[];
                };
                "1680105600": {
                    v: number[];
                    c: number[];
                };
                "1680116400": {
                    v: number[];
                    c: number[];
                };
                "1680127200": {
                    v: number[];
                    c: number[];
                };
                "1680138000": {
                    v: number[];
                    c: number[];
                };
                "1680148800": {
                    v: number[];
                    c: number[];
                };
                "1680163200": {
                    v: number[];
                    c: number[];
                };
                "1680174000": {
                    v: number[];
                    c: number[];
                };
                "1680184800": {
                    v: number[];
                    c: number[];
                };
                "1680195600": {
                    v: number[];
                    c: number[];
                };
                "1680210000": {
                    v: number[];
                    c: number[];
                };
                "1680220800": {
                    v: number[];
                    c: number[];
                };
                "1680231600": {
                    v: number[];
                    c: number[];
                };
                "1680242400": {
                    v: number[];
                    c: number[];
                };
                "1680253200": {
                    v: number[];
                    c: number[];
                };
                "1680267600": {
                    v: number[];
                    c: number[];
                };
                "1680278400": {
                    v: number[];
                    c: number[];
                };
                "1680289200": {
                    v: number[];
                    c: number[];
                };
                "1680300000": {
                    v: number[];
                    c: number[];
                };
                "1680314400": {
                    v: number[];
                    c: number[];
                };
                "1680325200": {
                    v: number[];
                    c: number[];
                };
                "1680336000": {
                    v: number[];
                    c: number[];
                };
                "1680346800": {
                    v: number[];
                    c: number[];
                };
                "1680361200": {
                    v: number[];
                    c: number[];
                };
                "1680372000": {
                    v: number[];
                    c: number[];
                };
                "1680382800": {
                    v: number[];
                    c: number[];
                };
                "1680393600": {
                    v: number[];
                    c: number[];
                };
                "1680404400": {
                    v: number[];
                    c: number[];
                };
                "1680418800": {
                    v: number[];
                    c: number[];
                };
                "1680429600": {
                    v: number[];
                    c: number[];
                };
                "1680440400": {
                    v: number[];
                    c: number[];
                };
                "1680451200": {
                    v: number[];
                    c: number[];
                };
                "1680465600": {
                    v: number[];
                    c: number[];
                };
                "1680476400": {
                    v: number[];
                    c: number[];
                };
                "1680487200": {
                    v: number[];
                    c: number[];
                };
                "1680498000": {
                    v: number[];
                    c: number[];
                };
                "1680508800": {
                    v: number[];
                    c: number[];
                };
                "1680523200": {
                    v: number[];
                    c: number[];
                };
                "1680534000": {
                    v: number[];
                    c: number[];
                };
                "1680544800": {
                    v: number[];
                    c: number[];
                };
                "1680555600": {
                    v: number[];
                    c: number[];
                };
                "1680570000": {
                    v: number[];
                    c: number[];
                };
                "1680580800": {
                    v: number[];
                    c: number[];
                };
                "1680591600": {
                    v: number[];
                    c: number[];
                };
                "1680602400": {
                    v: number[];
                    c: number[];
                };
                "1680613200": {
                    v: number[];
                    c: number[];
                };
                "1680627600": {
                    v: number[];
                    c: number[];
                };
                "1680638400": {
                    v: number[];
                    c: number[];
                };
                "1680649200": {
                    v: number[];
                    c: number[];
                };
                "1680660864": {
                    v: number[];
                };
            };
        };
        status: {
            timestamp: string;
            error_code: string;
            error_message: string;
            elapsed: string;
            credit_count: number;
        };
    };
}
/// <amd-module name="@scom/scom-trading-chart/store/dummy/index.ts" />
declare module "@scom/scom-trading-chart/store/dummy/index.ts" {
    export { day } from "@scom/scom-trading-chart/store/dummy/day.json.ts";
    export { week } from "@scom/scom-trading-chart/store/dummy/week.json.ts";
    export { month } from "@scom/scom-trading-chart/store/dummy/month.json.ts";
    export { threeMonths } from "@scom/scom-trading-chart/store/dummy/3-months.json.ts";
    export { year } from "@scom/scom-trading-chart/store/dummy/year.json.ts";
    export { all } from "@scom/scom-trading-chart/store/dummy/all.json.ts";
    export { historical } from "@scom/scom-trading-chart/store/dummy/historical.json.ts";
    export { ytd } from "@scom/scom-trading-chart/store/dummy/ytd.json.ts";
}
/// <amd-module name="@scom/scom-trading-chart/store/index.ts" />
declare module "@scom/scom-trading-chart/store/index.ts" {
    export { PageBlock, IConfig } from "@scom/scom-trading-chart/store/interface.ts";
    export * from "@scom/scom-trading-chart/store/dummy/index.ts";
}
/// <amd-module name="@scom/scom-trading-chart/index.css.ts" />
declare module "@scom/scom-trading-chart/index.css.ts" {
    export const groupBtnStyle: string;
    export const groupChartStyle: string;
}
/// <amd-module name="@scom/scom-trading-chart/assets.ts" />
declare module "@scom/scom-trading-chart/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-trading-chart" />
declare module "@scom/scom-trading-chart" {
    import { ControlElement, Module, Container, IDataSchema } from '@ijstech/components';
    import { IConfig, PageBlock } from "@scom/scom-trading-chart/store/index.ts";
    interface TradingChartElement extends ControlElement {
        tokenAddress: string;
        tokenSymbol: string;
        chainId?: string | number;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-trading-chart']: TradingChartElement;
            }
        }
    }
    export default class ScomTradingChart extends Module implements PageBlock {
        private pnlTradingChart;
        private lbTitle;
        private lineChartPrice;
        private lineAndCandlestickChart;
        private typeChart;
        private duration;
        private hStackType;
        private hStackSwitch;
        private hStackDuration;
        private _oldData;
        private _data;
        private oldTag;
        tag: any;
        defaultEdit: boolean;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        readonly onEdit: () => Promise<void>;
        static create(options?: TradingChartElement, parent?: Container): Promise<ScomTradingChart>;
        constructor(parent?: Container, options?: TradingChartElement);
        getData(): IConfig;
        setData(data: IConfig): Promise<void>;
        getTag(): any;
        setTag(value: any): Promise<void>;
        getConfigSchema(): IDataSchema;
        onConfigSave(config: any): void;
        edit(): Promise<void>;
        confirm(): Promise<void>;
        discard(): Promise<void>;
        config(): Promise<void>;
        private getPropertiesSchema;
        private getThemeSchema;
        getEmbedderActions(): {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
        }[];
        getActions(): {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
        }[];
        _getActions(propertiesSchema: IDataSchema, themeSchema: IDataSchema): {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
        }[];
        private updateTitle;
        private convertToCandlestickData;
        private convertData;
        private getChartData;
        private formatNumber;
        private initChart;
        private initCandlestickChart;
        private updateChart;
        private onTypeChange;
        private onDurationChange;
        private resizeCharts;
        init(): void;
        render(): any;
    }
}

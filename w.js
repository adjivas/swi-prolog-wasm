(function() {
    var wasm;
    const __exports = {};


    const __wbg_log_8d089e0f8d05525f_target = console.log;

    let cachedTextDecoder = new TextDecoder('utf-8');

    let cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory;
    }

    function getStringFromWasm(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
    }

    __exports.__wbg_log_8d089e0f8d05525f = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        __wbg_log_8d089e0f8d05525f_target(varg0);
    };

    let cachedTextEncoder = new TextEncoder('utf-8');

    function passStringToWasm(arg) {

        const buf = cachedTextEncoder.encode(arg);
        const ptr = wasm.__wbindgen_malloc(buf.length);
        getUint8Memory().set(buf, ptr);
        return [ptr, buf.length];
    }
    /**
    * @param {string} arg0
    * @returns {void}
    */
    __exports.greet2 = function(arg0) {
        const [ptr0, len0] = passStringToWasm(arg0);
        try {
            return wasm.greet2(ptr0, len0);

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    };

    const stack = [];

    const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

    function getObject(idx) {
        if ((idx & 1) === 1) {
            return stack[idx >> 1];
        } else {
            const val = slab[idx >> 1];

            return val.obj;

        }
    }

    __exports.__wbg_instanceof_Function_220b2df285bee4ce = function(idx) {
        return getObject(idx) instanceof Function ? 1 : 0;
    };

    const __wbg_call_415dd3260ee4a456_target = Function.prototype.call || function() {
        throw new Error(`wasm-bindgen: Function.prototype.call does not exist`);
    };

    let cachegetUint32Memory = null;
    function getUint32Memory() {
        if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
            cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
        }
        return cachegetUint32Memory;
    }

    let slab_next = slab.length;

    function addHeapObject(obj) {
        if (slab_next === slab.length) slab.push(slab.length + 1);
        const idx = slab_next;
        const next = slab[idx];

        slab_next = next;

        slab[idx] = { obj, cnt: 1 };
        return idx << 1;
    }

    __exports.__wbg_call_415dd3260ee4a456 = function(arg0, arg1, arg2, arg3, exnptr) {
        try {
            return addHeapObject(__wbg_call_415dd3260ee4a456_target.call(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3)));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__wbg_new_6b7f4334f7b728fd = function() {
        return addHeapObject(new Object());
    };

    const __wbg_get_b5fa2669cbf91d6f_target = Reflect.get.bind(Reflect) || function() {
        throw new Error(`wasm-bindgen: Reflect.get.bind(Reflect) does not exist`);
    };

    __exports.__wbg_get_b5fa2669cbf91d6f = function(arg0, arg1, exnptr) {
        try {
            return addHeapObject(__wbg_get_b5fa2669cbf91d6f_target(getObject(arg0), getObject(arg1)));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__wbg_new_a08c475766d5295e = function(arg0) {
        return addHeapObject(new Uint8Array(getObject(arg0)));
    };

    const __wbg_subarray_0317760f01ed1da6_target = Uint8Array.prototype.subarray || function() {
        throw new Error(`wasm-bindgen: Uint8Array.prototype.subarray does not exist`);
    };

    __exports.__wbg_subarray_0317760f01ed1da6 = function(arg0, arg1, arg2) {
        return addHeapObject(__wbg_subarray_0317760f01ed1da6_target.call(getObject(arg0), arg1, arg2));
    };

    __exports.__wbg_new_d15f5e2756dc1911 = function(arg0, arg1, exnptr) {
        try {
            return addHeapObject(new WebAssembly.Instance(getObject(arg0), getObject(arg1)));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    function GetOwnOrInheritedPropertyDescriptor(obj, id) {
        while (obj) {
            let desc = Object.getOwnPropertyDescriptor(obj, id);
            if (desc) return desc;
            obj = Object.getPrototypeOf(obj);
        }
        throw new Error(`descriptor for id='${id}' not found`);
    }

    const __wbg_exports_cf3d9a315863a3a1_target = GetOwnOrInheritedPropertyDescriptor(WebAssembly.Instance.prototype, 'exports').get || function() {
        throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(WebAssembly.Instance.prototype, 'exports').get does not exist`);
    };

    __exports.__wbg_exports_cf3d9a315863a3a1 = function(arg0) {
        return addHeapObject(__wbg_exports_cf3d9a315863a3a1_target.call(getObject(arg0)));
    };

    __exports.__wbg_new_1f334e01566b57d0 = function(arg0, exnptr) {
        try {
            return addHeapObject(new WebAssembly.Module(getObject(arg0)));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__wbg_instanceof_Memory_6356e128cd410abe = function(idx) {
        return getObject(idx) instanceof WebAssembly.Memory ? 1 : 0;
    };

    const __wbg_buffer_85f7dfee8f163ee8_target = GetOwnOrInheritedPropertyDescriptor(WebAssembly.Memory.prototype, 'buffer').get || function() {
        throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(WebAssembly.Memory.prototype, 'buffer').get does not exist`);
    };

    __exports.__wbg_buffer_85f7dfee8f163ee8 = function(arg0) {
        return addHeapObject(__wbg_buffer_85f7dfee8f163ee8_target.call(getObject(arg0)));
    };

    const __wbg_grow_4a231b1ada0346ce_target = WebAssembly.Memory.prototype.grow || function() {
        throw new Error(`wasm-bindgen: WebAssembly.Memory.prototype.grow does not exist`);
    };

    __exports.__wbg_grow_4a231b1ada0346ce = function(arg0, arg1) {
        return __wbg_grow_4a231b1ada0346ce_target.call(getObject(arg0), arg1);
    };

    function dropRef(idx) {

        idx = idx >> 1;
        if (idx < 4) return;
        let obj = slab[idx];

        obj.cnt -= 1;
        if (obj.cnt > 0) return;

        // If we hit 0 then free up our space in the slab
        slab[idx] = slab_next;
        slab_next = idx;
    }

    __exports.__wbindgen_object_drop_ref = function(i) {
        dropRef(i);
    };

    __exports.__wbindgen_string_new = function(p, l) {
        return addHeapObject(getStringFromWasm(p, l));
    };

    __exports.__wbindgen_number_new = function(i) {
        return addHeapObject(i);
    };

    __exports.__wbindgen_number_get = function(n, invalid) {
        let obj = getObject(n);
        if (typeof(obj) === 'number') return obj;
        getUint8Memory()[invalid] = 1;
        return 0;
    };

    __exports.__wbindgen_is_null = function(idx) {
        return getObject(idx) === null ? 1 : 0;
    };

    __exports.__wbindgen_is_undefined = function(idx) {
        return getObject(idx) === undefined ? 1 : 0;
    };

    __exports.__wbindgen_boolean_get = function(i) {
        let v = getObject(i);
        if (typeof(v) === 'boolean') {
            return v ? 1 : 0;
        } else {
            return 2;
        }
    };

    __exports.__wbindgen_is_symbol = function(i) {
        return typeof(getObject(i)) === 'symbol' ? 1 : 0;
    };

    __exports.__wbindgen_string_get = function(i, len_ptr) {
        let obj = getObject(i);
        if (typeof(obj) !== 'string') return 0;
        const [ptr, len] = passStringToWasm(obj);
        getUint32Memory()[len_ptr / 4] = len;
        return ptr;
    };

    __exports.__wbindgen_memory = function() {
        return addHeapObject(wasm.memory);
    };

    function takeObject(idx) {
        const ret = getObject(idx);
        dropRef(idx);
        return ret;
    }

    __exports.__wbindgen_rethrow = function(idx) { throw takeObject(idx); };

    __exports.__wbindgen_throw = function(ptr, len) {
        throw new Error(getStringFromWasm(ptr, len));
    };

    function init(wasm_path) {
        const fetchPromise = fetch(wasm_path);
        let resultPromise;
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            resultPromise = WebAssembly.instantiateStreaming(fetchPromise, { './w': __exports });
        } else {
            resultPromise = fetchPromise
            .then(response => response.arrayBuffer())
            .then(buffer => WebAssembly.instantiate(buffer, { './w': __exports }));
        }
        return resultPromise.then(({instance}) => {
            wasm = init.wasm = instance.exports;
            return;
        });
    };
    self.wasm_bindgen = Object.assign(init, __exports);
})();

exports.assertion = function(key, val, obj, msg) {

    this.message  = msg || 'is in object';
    this.expected = val;

    this.pass = function(value) {
        return obj[key] === this.expected;
    };

    this.value = function(result) {
        return result.value;
    };

    this.command = function(callback){
        this.api.execute(function(val){
            return val;
        }, [val], callback);
    };

};
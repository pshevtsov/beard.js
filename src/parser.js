/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"statement":6,"openBlock":7,"program":8,"closeBlock":9,"inlineTag":10,"elementTag":11,"variableTag":12,"CONTENT":13,"COMMENT":14,"OPEN":15,"ID":16,"args":17,"CLOSE":18,"hash":19,"OPEN_INLINE":20,"segments":21,"SEP":22,"hashSegment":23,"data":24,"compOperator":25,"EQUALS":26,"GREATER":27,"LESSER":28,"AND":29,"OR":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"simpleInverse":35,"OPEN_INVERSE":36,"END_BLOCK":37,"OPEN_ELEMENT":38,"OPEN_VARIABLE":39,"var":40,"func":41,"ALT":42,"funcArgs":43,"OP":44,"CP":45,"COMMA":46,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",13:"CONTENT",14:"COMMENT",15:"OPEN",16:"ID",18:"CLOSE",20:"OPEN_INLINE",22:"SEP",26:"EQUALS",27:"GREATER",28:"LESSER",29:"AND",30:"OR",32:"STRING",33:"INTEGER",34:"BOOLEAN",36:"OPEN_INVERSE",37:"END_BLOCK",38:"OPEN_ELEMENT",39:"OPEN_VARIABLE",42:"ALT",44:"OP",45:"CP",46:"COMMA"},
productions_: [0,[3,2],[4,1],[4,2],[6,3],[6,1],[6,1],[6,1],[6,1],[6,1],[7,4],[7,4],[10,4],[10,4],[21,3],[21,1],[19,1],[23,3],[25,1],[25,1],[25,1],[25,1],[25,1],[31,1],[31,1],[31,1],[8,2],[8,3],[8,2],[8,1],[8,1],[8,0],[35,2],[9,1],[11,3],[12,3],[24,1],[24,1],[24,1],[40,1],[40,3],[40,3],[40,5],[41,2],[41,4],[41,4],[41,6],[43,3],[17,3],[17,1],[17,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return new yy.ProgramNode($$[$0-1]); 
break;
case 2:this.$ = [$$[$0]];
break;
case 3: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 4:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0]);
break;
case 5:this.$ = new yy.InlineNode($$[$0]);
break;
case 6:this.$ = new yy.ElementNode($$[$0]);
break;
case 7:this.$ = $$[$0];
break;
case 8:this.$ = new yy.ContentNode($$[$0]);
break;
case 9:this.$ = new yy.CommentNode($$[$0]);
break;
case 10:this.$ = [$$[$0-2], $$[$0-1]];
break;
case 11:this.$ = [$$[$0-2], [$$[$0-1]]];
break;
case 12:this.$ = [$$[$0-2], $$[$0-1]];
break;
case 13:this.$ = [$$[$0-2], [$$[$0-1]]];
break;
case 14: $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 15:this.$ = [$$[$0]];
break;
case 16:this.$ = new yy.HashNode($$[$0]);
break;
case 17:this.$ = [$$[$0-2], $$[$0-1], $$[$0]];
break;
case 23:this.$ = new yy.StringNode($$[$0]);
break;
case 24:this.$ = new yy.IntegerNode($$[$0]);
break;
case 25:this.$ = new yy.BooleanNode($$[$0]);
break;
case 26:this.$ = new yy.ProgramNode([], $$[$0]);
break;
case 27:this.$ = new yy.ProgramNode($$[$0-2], $$[$0]);
break;
case 28:this.$ = new yy.ProgramNode($$[$0-1], []);
break;
case 29:this.$ = new yy.ProgramNode($$[$0]);
break;
case 30:this.$ = new yy.ProgramNode([]);
break;
case 31:this.$ = new yy.ProgramNode([]);
break;
case 33:this.$ = $$[$0];
break;
case 34:this.$ = $$[$0-1];
break;
case 35:this.$ = $$[$0-1];
break;
case 36:this.$ = $$[$0];
break;
case 37:this.$ = $$[$0];
break;
case 38:this.$ = $$[$0];
break;
case 39:this.$ = new yy.DataNode($$[$0]);
break;
case 40:this.$ = new yy.DataNode($$[$0-2], $$[$0]);
break;
case 41:this.$ = new yy.DataNode([$$[$0-2]].concat($$[$0]));
break;
case 42:this.$ = new yy.DataNode([$$[$0-4]].concat($$[$0-2]), $$[$0]);
break;
case 43:this.$ = new yy.FuncNode($$[$0-1], $$[$0]);
break;
case 44:this.$ = new yy.FuncNode($$[$0-3], $$[$0-2], $$[$0]);
break;
case 45:this.$ = new yy.FuncNode([$$[$0-3]].concat($$[$0-1]), $$[$0]);
break;
case 46:this.$ = new yy.FuncNode([$$[$0-5]].concat($$[$0-3]), $$[$0-2], $$[$0]);
break;
case 47:this.$ = $$[$0-1];
break;
case 48: $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 49:this.$ = [$$[$0]];
break;
case 50:this.$ = [];
break;
}
},
table: [{3:1,4:2,6:3,7:4,10:5,11:6,12:7,13:[1,8],14:[1,9],15:[1,10],20:[1,11],38:[1,12],39:[1,13]},{1:[3]},{5:[1,14],6:15,7:4,10:5,11:6,12:7,13:[1,8],14:[1,9],15:[1,10],20:[1,11],38:[1,12],39:[1,13]},{5:[2,2],13:[2,2],14:[2,2],15:[2,2],20:[2,2],36:[2,2],37:[2,2],38:[2,2],39:[2,2]},{4:18,6:3,7:4,8:16,10:5,11:6,12:7,13:[1,8],14:[1,9],15:[1,10],20:[1,11],35:17,36:[1,19],37:[2,31],38:[1,12],39:[1,13]},{5:[2,5],13:[2,5],14:[2,5],15:[2,5],20:[2,5],36:[2,5],37:[2,5],38:[2,5],39:[2,5]},{5:[2,6],13:[2,6],14:[2,6],15:[2,6],20:[2,6],36:[2,6],37:[2,6],38:[2,6],39:[2,6]},{5:[2,7],13:[2,7],14:[2,7],15:[2,7],20:[2,7],36:[2,7],37:[2,7],38:[2,7],39:[2,7]},{5:[2,8],13:[2,8],14:[2,8],15:[2,8],20:[2,8],36:[2,8],37:[2,8],38:[2,8],39:[2,8]},{5:[2,9],13:[2,9],14:[2,9],15:[2,9],20:[2,9],36:[2,9],37:[2,9],38:[2,9],39:[2,9]},{16:[1,20]},{16:[1,21]},{16:[1,22]},{16:[1,31],21:27,24:23,31:26,32:[1,28],33:[1,29],34:[1,30],40:24,41:25},{1:[2,1]},{5:[2,3],13:[2,3],14:[2,3],15:[2,3],20:[2,3],36:[2,3],37:[2,3],38:[2,3],39:[2,3]},{9:32,37:[1,33]},{4:34,6:3,7:4,10:5,11:6,12:7,13:[1,8],14:[1,9],15:[1,10],20:[1,11],37:[2,30],38:[1,12],39:[1,13]},{6:15,7:4,10:5,11:6,12:7,13:[1,8],14:[1,9],15:[1,10],20:[1,11],35:35,36:[1,19],37:[2,29],38:[1,12],39:[1,13]},{18:[1,36]},{16:[1,31],17:37,18:[2,50],19:38,21:27,23:40,24:39,31:26,32:[1,28],33:[1,29],34:[1,30],40:24,41:25,46:[2,50]},{16:[1,31],17:41,18:[2,50],19:42,21:27,23:40,24:39,31:26,32:[1,28],33:[1,29],34:[1,30],40:24,41:25,46:[2,50]},{18:[1,43]},{18:[1,44]},{18:[2,36],26:[2,36],27:[2,36],28:[2,36],29:[2,36],30:[2,36],45:[2,36],46:[2,36]},{18:[2,37],22:[1,45],26:[2,37],27:[2,37],28:[2,37],29:[2,37],30:[2,37],45:[2,37],46:[2,37]},{18:[2,38],26:[2,38],27:[2,38],28:[2,38],29:[2,38],30:[2,38],45:[2,38],46:[2,38]},{18:[2,39],22:[1,48],26:[2,39],27:[2,39],28:[2,39],29:[2,39],30:[2,39],42:[1,46],43:47,44:[1,49],45:[2,39],46:[2,39]},{18:[2,23],22:[2,23],26:[2,23],27:[2,23],28:[2,23],29:[2,23],30:[2,23],45:[2,23],46:[2,23]},{18:[2,24],22:[2,24],26:[2,24],27:[2,24],28:[2,24],29:[2,24],30:[2,24],45:[2,24],46:[2,24]},{18:[2,25],22:[2,25],26:[2,25],27:[2,25],28:[2,25],29:[2,25],30:[2,25],45:[2,25],46:[2,25]},{18:[2,15],22:[2,15],26:[2,15],27:[2,15],28:[2,15],29:[2,15],30:[2,15],42:[2,15],44:[2,15],45:[2,15],46:[2,15]},{5:[2,4],13:[2,4],14:[2,4],15:[2,4],20:[2,4],36:[2,4],37:[2,4],38:[2,4],39:[2,4]},{5:[2,33],13:[2,33],14:[2,33],15:[2,33],20:[2,33],36:[2,33],37:[2,33],38:[2,33],39:[2,33]},{6:15,7:4,10:5,11:6,12:7,13:[1,8],14:[1,9],15:[1,10],20:[1,11],37:[2,26],38:[1,12],39:[1,13]},{4:50,6:3,7:4,10:5,11:6,12:7,13:[1,8],14:[1,9],15:[1,10],20:[1,11],37:[2,28],38:[1,12],39:[1,13]},{13:[2,32],14:[2,32],15:[2,32],20:[2,32],37:[2,32],38:[2,32],39:[2,32]},{18:[1,51],46:[1,52]},{18:[1,53]},{18:[2,49],25:54,26:[1,55],27:[1,56],28:[1,57],29:[1,58],30:[1,59],46:[2,49]},{18:[2,16]},{18:[1,60],46:[1,52]},{18:[1,61]},{5:[2,34],13:[2,34],14:[2,34],15:[2,34],20:[2,34],36:[2,34],37:[2,34],38:[2,34],39:[2,34]},{5:[2,35],13:[2,35],14:[2,35],15:[2,35],20:[2,35],36:[2,35],37:[2,35],38:[2,35],39:[2,35]},{16:[1,31],21:62},{31:63,32:[1,28],33:[1,29],34:[1,30]},{18:[2,43],22:[2,43],26:[2,43],27:[2,43],28:[2,43],29:[2,43],30:[2,43],42:[1,64],45:[2,43],46:[2,43]},{16:[1,65]},{16:[1,31],17:66,21:27,24:67,31:26,32:[1,28],33:[1,29],34:[1,30],40:24,41:25,45:[2,50],46:[2,50]},{6:15,7:4,10:5,11:6,12:7,13:[1,8],14:[1,9],15:[1,10],20:[1,11],37:[2,27],38:[1,12],39:[1,13]},{13:[2,10],14:[2,10],15:[2,10],20:[2,10],36:[2,10],37:[2,10],38:[2,10],39:[2,10]},{16:[1,31],21:27,24:68,31:26,32:[1,28],33:[1,29],34:[1,30],40:24,41:25},{13:[2,11],14:[2,11],15:[2,11],20:[2,11],36:[2,11],37:[2,11],38:[2,11],39:[2,11]},{16:[1,31],21:27,24:69,31:26,32:[1,28],33:[1,29],34:[1,30],40:24,41:25},{16:[2,18],32:[2,18],33:[2,18],34:[2,18]},{16:[2,19],32:[2,19],33:[2,19],34:[2,19]},{16:[2,20],32:[2,20],33:[2,20],34:[2,20]},{16:[2,21],32:[2,21],33:[2,21],34:[2,21]},{16:[2,22],32:[2,22],33:[2,22],34:[2,22]},{5:[2,12],13:[2,12],14:[2,12],15:[2,12],20:[2,12],36:[2,12],37:[2,12],38:[2,12],39:[2,12]},{5:[2,13],13:[2,13],14:[2,13],15:[2,13],20:[2,13],36:[2,13],37:[2,13],38:[2,13],39:[2,13]},{18:[2,41],22:[1,48],26:[2,41],27:[2,41],28:[2,41],29:[2,41],30:[2,41],42:[1,70],43:71,44:[1,49],45:[2,41],46:[2,41]},{18:[2,40],26:[2,40],27:[2,40],28:[2,40],29:[2,40],30:[2,40],45:[2,40],46:[2,40]},{31:72,32:[1,28],33:[1,29],34:[1,30]},{18:[2,14],22:[2,14],26:[2,14],27:[2,14],28:[2,14],29:[2,14],30:[2,14],42:[2,14],44:[2,14],45:[2,14],46:[2,14]},{45:[1,73],46:[1,52]},{45:[2,49],46:[2,49]},{18:[2,48],45:[2,48],46:[2,48]},{18:[2,17]},{31:74,32:[1,28],33:[1,29],34:[1,30]},{18:[2,45],22:[2,45],26:[2,45],27:[2,45],28:[2,45],29:[2,45],30:[2,45],42:[1,75],45:[2,45],46:[2,45]},{18:[2,44],22:[2,44],26:[2,44],27:[2,44],28:[2,44],29:[2,44],30:[2,44],45:[2,44],46:[2,44]},{18:[2,47],22:[2,47],26:[2,47],27:[2,47],28:[2,47],29:[2,47],30:[2,47],42:[2,47],45:[2,47],46:[2,47]},{18:[2,42],26:[2,42],27:[2,42],28:[2,42],29:[2,42],30:[2,42],45:[2,42],46:[2,42]},{31:76,32:[1,28],33:[1,29],34:[1,30]},{18:[2,46],22:[2,46],26:[2,46],27:[2,46],28:[2,46],29:[2,46],30:[2,46],45:[2,46],46:[2,46]}],
defaultActions: {14:[2,1],40:[2,16],69:[2,17]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


function strip (start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
}


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
                                                this.begin('beard');
                                                if (yy_.yytext) return 13;
                                            
break;
case 1:return 13;
break;
case 2:strip(0,2); this.popState(); return 14;
break;
case 3:return 39;
break;
case 4:return 38;
break;
case 5:return 20;
break;
case 6:this.popState(); this.begin('com');
break;
case 7:strip(3,5); this.popState(); return 14;
break;
case 8:strip(6,9); this.popState(); return 37;
break;
case 9:return 36;
break;
case 10:return 15;
break;
case 11:return 30;
break;
case 12:return 42;
break;
case 13:return 22;
break;
case 14:return 46;
break;
case 15:return 44;
break;
case 16:return 45;
break;
case 17:return 26;
break;
case 18:return 27;
break;
case 19:return 28;
break;
case 20:return 29;
break;
case 21:/* ignore whitespace */
break;
case 22:this.popState(); return 18;
break;
case 23:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
break;
case 24:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
break;
case 25:return 33;
break;
case 26:return 34;
break;
case 27:return 34;
break;
case 28:return 16;
break;
case 29:return 'INVALID';
break;
case 30:return 5;
break;
}
},
rules: [/^(?:[^\x00]*?(?=(<%)))/,/^(?:[^\x00]+)/,/^(?:[\s\S]*?%>)/,/^(?:<%=)/,/^(?:<%@)/,/^(?:<%~)/,/^(?:<%#)/,/^(?:<%#[\s\S]*?%>)/,/^(?:<% end([a-zA-Z_][a-zA-Z0-9_]*) %>)/,/^(?:<%\s*else\b)/,/^(?:<%)/,/^(?:\|\|)/,/^(?:\|)/,/^(?:\.)/,/^(?:,)/,/^(?:\()/,/^(?:\))/,/^(?:===|==|=)/,/^(?:>)/,/^(?:<)/,/^(?:&&)/,/^(?:\s+)/,/^(?:%>)/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:-?[0-9]+)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:([a-zA-Z_][a-zA-Z0-9_]*))/,/^(?:.)/,/^(?:$)/],
conditions: {"beard":{"rules":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"inclusive":false},"com":{"rules":[2],"inclusive":false},"INITIAL":{"rules":[0,1,30],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
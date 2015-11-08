var LocalCSS = require('./index');

describe('component', function () {
    describe('localcss', function () {

        describe('function', function () {

            it('should replace the only class given', function () {
                var result = LocalCSS(
                    {myClass: 'KJLHbdfuzvfuds'},
                    '<div class="myClass"></div>'
                );
                expect(result).to.equal('<div class="KJLHbdfuzvfuds"></div>');
            });

            it('should not replace a similar class', function () {
                var result = LocalCSS(
                    {myClass: 'KJLHbdfuzvfuds'},
                    '<div class="myClass2 myClass myClass3"></div>'
                );
                expect(result).to.equal('<div class="myClass2 KJLHbdfuzvfuds myClass3"></div>');
            });

            it('should replace it only the first occurence', function () {
                var result = LocalCSS(
                    {myClass: 'KJLHbdfuzvfuds'},
                    '<div class="myClass2 myClass myClass myClass3"></div>'
                );
                expect(result).to.equal('<div class="myClass2 KJLHbdfuzvfuds myClass myClass3"></div>');
            });

            it('should replace all classes', function () {
                var result = LocalCSS(
                    {myClass: 'KJLHbdfuzvfuds', myClass2: 'aaaaaaaaaaaaaaaa', myClass3: 'bbbbbbbbbbb'},
                    '<div class="myClass2 myClass myClass myClass3"></div>'
                );
                expect(result).to.equal('<div class="aaaaaaaaaaaaaaaa KJLHbdfuzvfuds myClass bbbbbbbbbbb"></div>');
            });

            it('should not replace a prototype', function () {
                function Css() {
                    this.myClass = 'KJLHbdfuzvfuds';
                }
                Css.prototype.noClass = 'aaaa';

                var css = new Css();

                var result = LocalCSS(
                    css,
                    '<div class="myClass"></div>'
                );
                expect(result).to.equal('<div class="KJLHbdfuzvfuds"></div>');
            });

            it('should ignore unknown classes', function () {
                var result = LocalCSS(
                    {myUnknownClass: 'KJLHbdfuzvfuds'},
                    '<div class="myClass"></div>'
                );
                expect(result).to.equal('<div class="myClass"></div>');
            });

        });

    });

});

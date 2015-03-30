'use strict';

var assert = require('assert'),
    dnsSync = require('../index');

describe('dns sync', function () {

    it('should resolve dns', function () {
        assert.ok(dnsSync.resolve('www.example.com'));
        assert.ok(dnsSync.resolve('www.paypal.com'));
        assert.ok(dnsSync.resolve('www.google.com'));
        assert.ok(dnsSync.resolve('www.yahoo.com'));
    });

    it('should fail to resolve dns', function () {
        assert.ok(!dnsSync.resolve('www.example.con'));
        assert.ok(!dnsSync.resolve('www.paypal.con'));
        assert.ok(!dnsSync.resolve('www.not-google.first'));
        assert.ok(!dnsSync.resolve('www.hello-yahoo.next'));
    });

    it('should fail to resolve valid dns', function () {
        assert.ok(!dnsSync.resolve("$(id > /tmp/foo)'"));
        assert.ok(!dnsSync.resolve("cd /tmp; rm -f /tmp/echo; env 'x=() { (a)=>\' bash -c \"echo date\"; cat /tmp/echo"));
        assert.ok(!dnsSync.resolve("$(grep -l -z '[^)]=() {' /proc/[1-9]*/environ | cut -d/ -f3)'"));
    });
});

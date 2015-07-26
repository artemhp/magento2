/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'underscore',
    'uiRegistry',
    'Magento_Ui/js/form/provider'
], function (_, registry, constr) {
    'use strict';

    describe('Magento_Ui/js/form/provider', function () {
        registry.set('provName', {
            on: function () {
            },
            get: function () {
            },
            set: function () {
            }
        });

        var obj = new constr({
                provider: 'provName',
                name: '',
                index: ''
            }),
            originalClient = obj.client,
            originalClientSave = originalClient.save;
        describe('"initialize" method', function () {
            it('Check for defined ', function () {
                expect(obj.hasOwnProperty('initialize')).toBeDefined();
            });
            it('Check method type', function () {
                var type = typeof(obj.initialize);

                expect(type).toEqual('function');
            });
            it('Check returned value if method called without arguments', function () {
                expect(obj.initialize()).toBeDefined();
            });
            it('Check returned value type if method called without arguments', function () {
                var type = typeof(obj.initialize());

                expect(type).toEqual('object');
            });
        });
        describe('"initClient" method', function () {
            it('Check for defined ', function () {
                expect(obj.hasOwnProperty('initClient')).toBeDefined();
            });
            it('Check method type', function () {
                var type = typeof(obj.initClient);

                expect(type).toEqual('function');
            });
            it('Check returned value if method called without arguments', function () {
                expect(obj.initClient()).toBeDefined();
            });
            it('Check returned value type if method called without arguments', function () {
                var type = typeof(obj.initClient());

                expect(type).toEqual('object');
            });
            it('Check returned value type if method called without arguments', function () {
                obj.client = null;
                expect(typeof(obj.client)).toEqual('object');
            });
        });
        describe('"save" method', function () {
            it('Check for defined ', function () {
                expect(obj.hasOwnProperty('save')).toBeDefined();
            });
            it('Check method type', function () {
                var type = typeof(obj.save);

                expect(type).toEqual('function');
            });
            it('Check returned value if method called without arguments', function () {
                obj.client = originalClient;
                obj.client.save = jasmine.createSpy();
                expect(obj.save()).toBeDefined();
            });
            it('Check returned value type if method called without arguments', function () {
                var type = typeof(obj.save());

                expect(type).toEqual('object');
            });
            it('Check call method "this.get" inner save method', function () {
                obj.get = jasmine.createSpy();
                obj.save();
                expect(obj.get).toHaveBeenCalled();
            });
            it('Check call method "this.client.save" inner save method', function () {
                obj.get = jasmine.createSpy();
                obj.save();
                expect(obj.client.save).toHaveBeenCalled();
            });
        });
    });
});

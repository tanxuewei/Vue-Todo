/*
 * @file:main.js
 * @overview:主js
 * @author:Tan-Xuewei
 */

(function($){
    $(document).ready(function(){
        //定义模型
        var InvoiceItemModel = Backbone.Model.extend({
            defaults: {
                description: '',
                price: 0,
                quantity: 1,
                date: function(){
                    var date = new Date();

                    return date.toISOString();
                }
            },
            calculateAmount: function(){
                return this.get('price') * this.get('quantity');
            },
            validate: function(attrs){
                if (attrs.quantity <= 0){
                    return 'nonono';
                }
            }
        });

        //模型实例
        var invoiceItemModel = new InvoiceItemModel({
            price: 2,
            quantity: 3
        });


        //对模型进行渲染的视图
        var PreviewInvoiceItemView = Backbone.View.extend({
            //定义模板（用来自underscore.js的模板引擎）
            template: _.template('\
                Price: <%= price %>.\
                Quantity: <%= quantity %>.\
                Amount: <%= amount %>.\
            '),
            //渲染视图
            render: function(){
                var html = this.template({
                    price: this.model.get('price'),
                    quantity: this.model.get('quantity'),
                    amount: this.model.calculateAmount()
                });

                $(this.el).html(html);
            }
        });

        var previewInvoiceItemView = new PreviewInvoiceItemView({
            model: invoiceItemModel,
            el: 'body'
        });

        //
        var InvoiceListView = Backbone.View.extend({
            //定义模板（用来自underscore.js的模板引擎）
            template: _.template('\
                Price: <%= price %>.\
            '),
            //渲染视图
            render: function(){
                var html = this.template({
                    price: 'Displaying list of invoices.'
                });

                $(this.el).html(html);
            }
        });

//         previewInvoiceItemView.render();

        var Workspace = Backbone.Router.extend({
            routes: {
                '': 'invoiceList',
                'invoice': 'invoiceList'
            },
            invoiceList: function(){
                var invoiceListView = new InvoiceListView({
                    el: 'body'
                });
                invoiceListView.render();
            }
        })
    });
})(jQuery);
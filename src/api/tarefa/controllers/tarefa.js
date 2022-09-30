'use strict';

/**
 * tarefa controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tarefa.tarefa', ({ strapi }) =>  ({
  
    async create(ctx) {
      
        const {user} = ctx.state
        console.log(user)
        //Adicionando o id do usuário logado
        ctx.request.body.data = { ...ctx.request.body.data, usuario:user.id }
      
        const response = await super.create(ctx);
        return response;
    },

    async find(ctx) {
        const {user} = ctx.state
        //Filtra pelo usuário
        ctx.query = {...ctx.query, filters:{usuario:user.id}}
        const response = await super.find(ctx);
        return response;
    },

    async findOne(ctx) {
        const {user} = ctx.state
        //Filtra pelo usuário
        ctx.query = {...ctx.query, filters:{usuario:user.id}}
        const response = await super.findOne(ctx);
        return response;
    }
}));

import TrackingServices from '@/services/TrackingServices.js'
export default (ctx, inject) => {
  const tracking = TrackingServices(ctx.$gtag, ctx.store, ctx.$pin, ctx.app.$fb)
  inject('tracking', tracking)
}

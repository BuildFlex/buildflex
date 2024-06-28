export const updateOrder = async (
  model: any,
  where: any,
  order: { new?: number; old?: number }
) => {
  const oldOrder = order.old;
  const newOrder = order.new;
  if (oldOrder === newOrder) return;
  if (!oldOrder) {
    await updateOrderWhenCreate(model, where, newOrder);
    return;
  }
  if (!newOrder) {
    await updateOrderWhenDelete(model, where, oldOrder);
    return;
  }
  if (oldOrder > newOrder) {
    await updateOrderWhenOrderDown(model, where, order);
    return;
  } else {
    await updateOrderWhenOrderUp(model, where, order);
    return;
  }
};

async function updateOrderWhenCreate(model: any, where: any, newOrder: number) {
  return await model.updateMany({
    where: {
      ...where,
      order: {
        gte: newOrder,
      },
    },
    data: {
      order: {
        increment: 1,
      },
    },
  });
}

async function updateOrderWhenDelete(model: any, where: any, oldOrder: number) {
  return await model.updateMany({
    where: {
      ...where,
      order: {
        gte: oldOrder,
      },
    },
    data: {
      order: {
        decrement: 1,
      },
    },
  });
}

async function updateOrderWhenOrderDown(
  model: any,
  where: any,
  order: { new?: number; old?: number }
) {
  await model.updateMany({
    where: {
      ...where,
      order: {
        gte: order.new,
        lt: order.old,
      },
    },
    data: {
      order: {
        increment: 1,
      },
    },
  });
}

async function updateOrderWhenOrderUp(
  model: any,
  where: any,
  order: { new?: number; old?: number }
) {
  return await model.updateMany({
    where: {
      ...where,
      order: {
        lte: order.new,
        gt: order.old,
      },
    },
    data: {
      order: {
        decrement: 1,
      },
    },
  });
}

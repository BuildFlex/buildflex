export const updateOrder = async (
  model: any,
  where: any,
  order: { new?: number; old?: number }
) => {
  const oldOrder = order.old;
  const newOrder = order.new;
  console.log(oldOrder, newOrder);
  if (oldOrder === newOrder) return;
  console.log(1);
  if (oldOrder === undefined) {
    console.log(2);
    await updateOrderWhenCreate(model, where, newOrder);
    return;
  }
  if (newOrder === undefined) {
    console.log(3);
    await updateOrderWhenDelete(model, where, oldOrder);
    return;
  }
  if (oldOrder > newOrder) {
    console.log(4);
    await updateOrderWhenOrderDown(model, where, order);
    return;
  } else {
    console.log(5);
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
  console.log(
    await model.findMany({
      where: {
        order: {
          gte: order.new,
          lt: order.old,
        },
      },
    })
  );
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

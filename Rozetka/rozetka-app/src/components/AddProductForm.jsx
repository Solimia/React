import React from 'react';
import { useForm } from 'react-hook-form';

const AddProductForm = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const originalPrice = parseFloat(data.originalPrice);
    const discountedPrice = parseFloat(data.discountedPrice);
    let discountPercent = null;

    if (discountedPrice && originalPrice > discountedPrice) {
      discountPercent = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
    }

    onAdd({
      ...data,
      originalPrice,
      discountedPrice: discountedPrice || null,
      discountPercent,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input {...register("name", { required: true })} placeholder="Назва товару" />
      {errors.name && <span>Назва обов'язкова</span>}

      <input type="number" {...register("originalPrice", { required: true })} placeholder="Ціна (грн)" />
      {errors.originalPrice && <span>Ціна обов'язкова</span>}

      <input type="number" {...register("discountedPrice")} placeholder="Ціна зі знижкою (не обов'язково)" />

      <input {...register("imageUrl")} placeholder="URL зображення" />

      <button type="submit">Додати товар</button>
    </form>
  );
};

export default AddProductForm;

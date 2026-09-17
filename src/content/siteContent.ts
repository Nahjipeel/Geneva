export const services = [
  { title: 'Collision Repair', icon: 'wrench', promise: 'Factory-quality body and paint repairs after an accident.', detail: 'For cars, trucks, and SUVs' },
  { title: 'Insurance Claims', icon: 'document', promise: 'Guidance through the claim and repair process.', detail: 'Practical next steps when you need them' },
  { title: 'Custom Paint', icon: 'paint', promise: 'Custom paint and airbrush work for cars, motorcycles, and helmets.', detail: 'Color, detail, and clear coat' }
] as const;

export const gallery = [
  { title: '1965 Mustang restoration', medium: 'Classic car', badge: 'Featured restoration', description: 'A $90,000 restoration feature, finished panel by panel with period-minded bodywork and show-ready paint.', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=900&q=80' },
  { title: 'Custom motorcycle tank', medium: 'Motorcycle', badge: 'Featured custom work', description: "Custom paint and airbrush finish shaped around the tank's lines, then protected with a deep clear coat.", image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80' },
  { title: 'Painted helmet', medium: 'Helmet', badge: 'Featured custom work', description: 'Airbrush artwork and clear coat built for a crisp graphic finish that holds up under the miles.', image: 'https://images.unsplash.com/photo-1558980664-10ea5c5cce96?auto=format&fit=crop&w=900&q=80' }
] as const;

export const shop = { address: '1211 Lyon Rd, Batavia, IL 60510', phone: '630-482-3554', hours: 'Mon-Fri 8 a.m. to 5 p.m. · Saturday 8 a.m. to 12 p.m.' };

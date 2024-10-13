// 'use server'



// export async function bookingFormAction(formData: BookingFormInputs) {

//     try {
//         const newBooking: BookingDTO = {
//             booking_code: formData.booking_code,
//             user_id: formData.user_id,
//             event_id: formData.event_id,
//             booking_date: new Date().toISOString() as string,
//             status: formData.status,
//             created_at: new Date().toISOString() as string,
//             updated_at: new Date().toISOString() as string,
//         }

//         const res = await db.insert(Bookings).values(newBooking);
//         revalidatePath('/')
//         console.log({ res })
//         return "saved";
//     } catch (event: unknown) {
//         console.log({ event });
//         return `Error saving booking `;
//     }
// }



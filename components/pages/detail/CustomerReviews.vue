<template>
  <div>
    <p class='m-3'>Reviews (50)</p>
    <div class='flex flex-row items-center'>
      <div class='flex flex-col m-3'>
        <div class='rating rating-sm flex items-center mb-2'>
          <input
            type='radio'
            name='rating-1'
            disabled
            class='mask mask-star-2 bg-yellow-400'
          />
          <input
            type='radio'
            name='rating-1'
            disabled
            class='mask mask-star-2 bg-yellow-400 mx-1'
          />
          <input
            type='radio'
            name='rating-1'
            disabled
            class='mask mask-star-2 bg-yellow-400 mx-1'
          />
          <input
            type='radio'
            name='rating-1'
            disabled
            class='mask mask-star-2 bg-yellow-400 mx-1'
          />
          <input
            type='radio'
            name='rating-1'
            disabled
            class='mask mask-star-2 bg-yellow-400'
          />
          <progress
            class='progress progress-info w-56 h-1 ml-3'
            value='100'
            max='100'
          ></progress>
        </div>
        <div class='rating rating-sm flex items-center mb-2'>
          <input
            type='radio'
            name='rating-2'
            class='mask mask-star-2 bg-yellow-400'
            disabled
          />
          <input
            type='radio'
            name='rating-2'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
          />
          <input
            type='radio'
            name='rating-2'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
          />
          <input
            type='radio'
            name='rating-2'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
            checked
          />
          <input
            type='radio'
            name='rating-2'
            class='mask mask-star-2 bg-yellow-400'
            disabled
          />
          <progress
            class='progress progress-info w-56 h-1 ml-3'
            value='80'
            max='100'
          ></progress>
        </div>
        <div class='rating rating-sm flex items-center mb-2'>
          <input
            type='radio'
            name='rating-3'
            class='mask mask-star-2 bg-yellow-400'
            disabled
          />
          <input
            type='radio'
            name='rating-3'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
          />
          <input
            type='radio'
            name='rating-3'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
            checked
          />
          <input
            type='radio'
            name='rating-3'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
          />
          <input
            type='radio'
            name='rating-3'
            class='mask mask-star-2 bg-yellow-400'
            disabled
          />
          <progress
            class='progress progress-info w-56 h-1 ml-3'
            value='40'
            max='100'
          ></progress>
        </div>
        <div class='rating rating-sm flex items-center mb-2'>
          <input
            type='radio'
            name='rating-4'
            class='mask mask-star-2 bg-yellow-400'
            disabled
          />
          <input
            type='radio'
            name='rating-4'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
            checked
          />
          <input
            type='radio'
            name='rating-4'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
          />
          <input
            type='radio'
            name='rating-4'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
          />
          <input
            type='radio'
            name='rating-4'
            class='mask mask-star-2 bg-yellow-400'
            disabled
          />
          <progress
            class='progress progress-info w-56 h-1 ml-3'
            value='0'
            max='100'
          ></progress>
        </div>
        <div class='rating rating-sm flex items-center'>
          <input
            type='radio'
            name='rating-5'
            class='mask mask-star-2 bg-yellow-400'
            disabled
            checked
          />
          <input
            type='radio'
            name='rating-5'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
          />
          <input
            type='radio'
            name='rating-5'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
          />
          <input
            type='radio'
            name='rating-5'
            class='mask mask-star-2 bg-yellow-400 mx-1'
            disabled
          />
          <input
            type='radio'
            name='rating-5'
            class='mask mask-star-2 bg-yellow-400'
            disabled
          />
          <progress
            class='progress progress-info w-56 h-1 ml-3'
            value='0'
            max='100'
          ></progress>
        </div>
      </div>
      <button class='btn btn-outline btn-info ml-5'>+ Write your review</button>
    </div>
    <p>All Reviews</p>
    <div  v-for="(item, j) in reviews"
          :key="j">

    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerReviews',
  computed: {
    reviews() {
      return [
        {
          'name': 'Dana Swigert',
          'email': 'a@gmail.com',
          'title': 'Happy',
          'content': 'Fun shirt, very well made. I have put it through the wash following the instructions, and it came out in great condition. I am happy with my purchase.',
          'date_created': 'Mon Apr 18 2022'
        },
        {
          'name': 'Angela Long',
          'email': '',
          'title': 'I love this so much',
          'content': 'I love this so much:) it is exactly like the picture.',
          'date_created': 'Mon Apr 18 2022'
        },
        {
          'name': 'Shana Schultz',
          'email': '',
          'title': 'Love it',
          'content': 'Fits perfect and good quality!',
          'date_created': 'Thu Apr 17 2022'
        },
        {
          'name': 'Cassandra Rogers',
          'email': '',
          'title': 'Thank you!',
          'content': 'The seller made sure the order was exactly what we wanted. Thank you!',
          'date_created': 'Thu Apr 16 2022'
        },
        {
          'name': 'J Evans',
          'email': '',
          'title': 'Great experience',
          'content': 'Great quality. Excellent customer service. Arrived in time for a special birthday party. Highly recommend seller',
          'date_created': 'Thu Apr 16 2022'
        },
        {
          'name': 'Muriah',
          'email': '',
          'title': 'Great experience',
          'content': 'Great experience. Would definitely buy again.',
          'date_created': 'Thu Apr 16 2022'
        },
        {
          'name': 'Kennidy Holt',
          'email': '',
          'title': 'LOVE IT!',
          'content': '* LOVE IT!!!!!!!!* :) SOOOOOOO COOL',
          'date_created': 'Thu Apr 15 2022'
        },
        {
          'name': 'Kristina Hernandez',
          'email': '',
          'title': 'Such a soft tshirt',
          'content': 'Such a soft tshirt I love it and the design looks just like it is pictured!',
          'date_created': 'Thu Apr 14 2022'
        },
        {
          'name': "Bleich",
          'email': "",
          'title': "Fits great",
          'content': "the quality is perfect and I got a lot of compliments on it. There was also a shipping problem and the company immediately rectified the situation. I would order from them again!",
          'date_created': "Thu Apr 14 2022",
        }
      ]
    }
  }
}
</script>

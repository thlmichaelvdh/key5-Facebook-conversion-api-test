<template>
  <div style="background-color: #ececec; padding: 20px; min-width: 800px; max-width: 900px; margin: auto">
    <a-row :gutter="16">
      <a-col :span="8">
        <NuxtLink :to="`/car/valiant`">
          <a-card title="Chrysler Valiant" hoverable style="width: 240px">
            <img
                slot="cover"
                alt="example"
                src="https://res.cloudinary.com/thl/image/upload/c_fill,h_240,w_240/v1633925440/zzz_test_folder/1971-chrysler-valiant-charger-rt-e37-coupe.jpg"
            />
            <p>Valiant Charger</p>
            <p>1972</p>
            <p>265ci x3 Weber carbs 325hp</p>
            <p>Most powerful 6cyl in the world in '72</p>
            <p>from $249,000</p>
            <a-button type="primary">VIEW MORE</a-button>
          </a-card>
        </NuxtLink>
      </a-col>
      <a-col :span="8">
        <NuxtLink :to="`/car/toyota`">
          <a-card hoverable style="width: 240px" title="Toyota">
            <img
                slot="cover"
                alt="example"
                src="https://res.cloudinary.com/thl/image/upload/c_fill,h_240,w_240/v1633925427/zzz_test_folder/Screen_Shot_2021-05-28_at_10.05.35_PM.png"
            />
            <p>Corolla TE71</p>
            <p>1983</p>
            <p>2T DOHC 1800cc</p>
            <p>Twin Overhead Cam</p>
            <p>Fuel injected</p>
            <p>Rear wheel drive</p>

            <a-button type="primary">VIEW MORE</a-button>
          </a-card>
        </NuxtLink>
      </a-col>
      <a-col :span="8">
        <NuxtLink :to="`/car/kart`">
          <a-card hoverable style="width: 240px" title="Junior Kart">
            <img
                slot="cover"
                alt="example"
                src="https://res.cloudinary.com/thl/image/upload/c_fill,h_240,w_240/v1633925475/zzz_test_folder/IMG_3727.jpg"
            />
            <p>Go Kart</p>
            <p>Liam Lawsom set the lap record in Avondale for this class in the same chassis</p>
            <p>Arrow Cadet</p>
            <p>Racket engine, cc unknown at the mo</p>
            <a-button type="primary">VIEW MORE</a-button>
          </a-card>
        </NuxtLink>
      </a-col>
    </a-row>
  </div>

</template>

<script>

export default {
}
</script>

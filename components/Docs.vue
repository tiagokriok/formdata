<template>
  <section class="pb-16 px-6 lg:px-0 max-w-4xl mx-auto">
    <div class="space-y-5">
      <h1 class="font-display text-2xl md:text-4xl font-bold">
        How to use formdata?
      </h1>
      <p
        class="text-base md:text-lg font-medium text-gray-600 dark:text-gray-400"
      >
        Just send a post request to
        <span class="bg-gray-200 rounded-lg p-1 font-mono"
          >https://formdata.cc/api/submit</span
        >
        with the below parameters.
      </p>

      <pre
        class="bg-black p-4 rounded-lg text-gray-400 text-sm font-mono overflow-x-auto"
        >{{ codeExample }}</pre
      >

      <p
        class="text-base md:text-lg font-medium text-gray-600 dark:text-gray-400"
      >
        I am still working on accepting the data in the form of a formdata, if
        you are interested to contribute, please have a look at the
        <a href="https://github.com/fayazara/formdata" class="underline"
          >repo.</a
        >
      </p>
    </div>
  </section>
</template>

<script setup>
const codeExample = `{
	"fromName": "Fayaz", // required
	"toEmail": "john@acme.com", // required
	"subject": "Need some help with orders", // required
	"replyTo": "hi@feedful.app", // required
	"Contact number": "+91 9090909090",
	"Message": "Hello there, I need some help, My order is stuck in customs for over 3 days now",
	"Order Id": "123123123"
}`;
</script>

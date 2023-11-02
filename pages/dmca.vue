<template>
  <div>
    <main class='font-roboto'>
      <Container :padding="'px-4 2xl:px-10'" class='flex flex-col py-5'>
        <div class="main">
          <div>
            <h1 class="text-center font-bold text-xl">DMCA</h1>
          </div>
          <div class="pt-10">
            <section class="pb-10 ">
              <div >

                <p>
                  We follow the DMCA procedures for removing any content on any of
                  the sites on servers hosted by&nbsp;<strong>{{ $store.state.store.logoText }}</strong
                >. that is posted by third parties and which infringes on
                  intellectual property rights. Offenders may be banned from
                  commenting on the site. If you believe that any content on our
                  site infringes on your intellectual property, please contact us
                  using the form below with the specific details of the content,
                  including:
                </p>
                <ul>
                  <li>Your name, address, and electronic signature</li>
                  <li>
                    The infringing materials and the URL where they are located on
                    our site
                  </li>
                  <li>
                    Proof that you hold intellectual property rights to the material
                  </li>
                  <li>
                    A statement by you that you have a good faith belief that there
                    is no legal basis for the use of the content
                  </li>
                  <li>
                    A statement of the accuracy of the notice and, under penalty of
                    perjury, that you are either the owner of the intellectual
                    property rights or are authorized to act on the behalf of the
                    owner
                  </li>
                </ul>
                <p>
                  If we receive a DMCA claim and remove the relevant content that
                  you have posted to our site, you may send us a counter-notice. The
                  counter notice must contain the following information:
                </p>
                <ul>
                  <li>
                    Your name, address, phone number, and physical or electronic
                    signature
                  </li>
                  <li>
                    Identification of the material and its location before removal
                  </li>
                  <li>
                    A statement under penalty of perjury that the material was
                    removed by mistake or misidentification
                  </li>
                  <li>
                    Subscriber consent to local federal court jurisdiction, or if
                    overseas, to an appropriate judicial body.
                  </li>
                </ul>
                <p class="mt-5"><strong>STATEMENTS:</strong></p>
                <p>
                  When you send us DMCA report, we understand that you have read and
                  accepted statements below:
                </p>
                <p>
                  <em
                  >*I have a good faith belief that content(s) in the campaign
                    described above violate(s) my rights described above or those
                    held by the rights owner, and that the use of such content(s) is
                    contrary to law.</em
                  >
                </p>
                <p>
                  <em
                  >*I declare, under penalty of perjury, that the information
                    completed above is correct and accurate and that I am the owner
                    or agent of the owner of the rights described above.</em
                  >
                </p>
                <p class="mt-5">
                  <strong>CONTACT US:</strong>&nbsp;<strong>{{ $store.state.store.logoText }}</strong>
                </p>
                <p><strong>Head Office:</strong>&nbsp;</p>
                <p>{{ $store.state.store.address }}</p>
                <p>
                  <strong>Email:&nbsp;{{ $store.state.store.email }}</strong>
                </p>

              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  </div>

</template>
<script>
export default {
  head() {
    return {

    };
  }
};
</script>

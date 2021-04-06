<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">SOAP Note</h1>
          <h2 class="subtitle">for any first aider to fill in</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <b-field label="Date of the event">
                  <b-datepicker
                    v-model="date"
                    placeholder="Pick a date from the calendar..."
                  >
                  </b-datepicker>
                </b-field>
                <b-field label="Time of the event">
                  <b-timepicker v-model="time" placeholder="Pick a time...">
                  </b-timepicker>
                </b-field>
                <b-field label="Full name">
                  <b-input v-model="name" placeholder="e.g. Joe Doe"></b-input>
                </b-field>
                <b-field label="Age">
                  <b-numberinput
                    v-model="age"
                    :min="0"
                    :max="99"
                  ></b-numberinput>
                </b-field>
                <b-field label="Sex">
                  <b-select v-model="sex" expanded>
                    <option>Male</option>
                    <option>Female</option>
                  </b-select>
                </b-field>
                <b-field label="Address" class="mb-3">
                  <b-input
                    v-model="address"
                    placeholder="Permanent living address of a casualty"
                  ></b-input>
                </b-field>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <b-field label="Notify">
                  <b-input
                    v-model="notify"
                    type="textarea"
                    placeholder="Who should be notified once casualty arrives into the hospital"
                  ></b-input>
                </b-field>
                <b-field label="Subjective">
                  <b-input
                    v-model="subjective"
                    type="textarea"
                    placeholder="Chief compliant (c/c), history of present ilness (opqrst), mechanism of injury (moi)"
                  ></b-input>
                </b-field>
                <b-field label="Objective">
                  <b-input
                    v-model="objective"
                    type="textarea"
                    placeholder="Patient examination (head/neck, shoulders/clavicle, chest/sternum, abdomen, pelvis/hips, legs/feet, arms/hands, back), SAMPLE history"
                  ></b-input>
                </b-field>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <b-field label="Vital Signs">
                  <b-input
                    v-model="vitalSigns"
                    type="textarea"
                    placeholder="Time, heart rate (bpm, character), respiratory rate (bpm, character), skin (color, temperature, moisture), level of response (AVPU), blood pressure"
                  ></b-input>
                </b-field>
                <b-field label="Assessment">
                  <b-input
                    v-model="assessment"
                    type="textarea"
                    placeholder="Medical diagnosis, a list of other possible diagnoses usually in order of most likely to least likely"
                  ></b-input>
                </b-field>
                <b-field label="Plan">
                  <b-input
                    v-model="plan"
                    type="textarea"
                    placeholder="Procedures performed, medication given, possible further actions"
                  ></b-input>
                </b-field>
              </div>
            </div>
          </div>
        </div>
        <b-modal v-model="isModalActive" :width="480">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p>Are you sure? You won't be able to recover the data!</p>
                <b-button type="is-danger" expanded @click="clear()">
                  Yes I am, wipe it all off
                </b-button>
              </div>
            </div>
          </div>
        </b-modal>
        <b-button type="is-danger" expanded @click="isModalActive = true">
          Clear all of the sections
        </b-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      time: null,
      name: "",
      age: 18,
      sex: "Male",
      address: "",
      notify: "",
      subjective: "",
      objective: "",
      vitalSigns: "",
      assessment: "",
      plan: "",
      isModalActive: false,
    };
  },
  watch: {
    date(newDate) {
      localStorage.date = newDate;
    },
    time(newTime) {
      localStorage.time = newTime;
    },
    name(newName) {
      localStorage.name = newName;
    },
    age(newAge) {
      localStorage.age = newAge;
    },
    sex(newSex) {
      localStorage.sex = newSex;
    },
    address(newAddress) {
      localStorage.address = newAddress;
    },
    notify(newNotify) {
      localStorage.notify = newNotify;
    },
    subjective(newSubjective) {
      localStorage.subjective = newSubjective;
    },
    objective(newObjective) {
      localStorage.objective = newObjective;
    },
    vitalSigns(newVitalSigns) {
      localStorage.vitalSigns = newVitalSigns;
    },
    assessment(newAssessment) {
      localStorage.assessment = newAssessment;
    },
    plan(newPlan) {
      localStorage.plan = newPlan;
    },
  },
  mounted() {
    if (localStorage.date) {
      this.date = new Date(localStorage.date);
    }
    if (localStorage.time) {
      this.time = new Date(localStorage.time);
    }
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.age) {
      this.age = Number(localStorage.age);
    }
    if (localStorage.sex) {
      this.sex = localStorage.sex;
    }
    if (localStorage.address) {
      this.address = localStorage.address;
    }
    if (localStorage.notify) {
      this.notify = localStorage.notify;
    }
    if (localStorage.subjective) {
      this.subjective = localStorage.subjective;
    }
    if (localStorage.objective) {
      this.objective = localStorage.objective;
    }
    if (localStorage.vitalSigns) {
      this.vitalSigns = localStorage.vitalSigns;
    }
    if (localStorage.assessment) {
      this.assessment = localStorage.assessment;
    }
    if (localStorage.plan) {
      this.plan = localStorage.plan;
    }
  },
  methods: {
    clear() {
      this.date = null;
      this.time = null;
      this.name = "";
      this.age = 18;
      this.sex = "Male";
      this.address = "";
      this.notify = "";
      this.subjective = "";
      this.objective = "";
      this.vitalSigns = "";
      this.assessment = "";
      this.plan = "";
      this.isModalActive = false;
    },
  },
};
</script>

<style>
</style>
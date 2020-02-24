<template>
    <div class="displayer">
        <div class="services-grid">
            <div class="service">
              <i class="el-icon-s-data"></i>
              <h4>Wealth Management</h4>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <router-link to="/" class="cta">Read More <i class="el-icon-arrow-right"></i></router-link>
            </div>

            <div class="service">
              <i class="el-icon-s-data"></i>
              <h4>Wealth Management</h4>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <router-link to="/" class="cta">Read More <i class="el-icon-arrow-right"></i></router-link>
            </div>

            <div class="service">
              <i class="el-icon-s-data"></i>
              <h4>Wealth Management</h4>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <router-link to="/" class="cta">Read More <i class="el-icon-arrow-right"></i></router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped src="../assets/font/font_face.css"></style>
<style scoped>
* {
    color: #999;
}
.service > a {
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
}
.service a > i {
    font-size: 0.8125rem;
} 

.service > p {
  font-size: 0.9rem;
  margin: 1rem 0;
  line-height: 1.5;
}

section {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}


.section-lead {
  max-width: 600px;
  margin: 1rem auto 1.5rem;
}

.service a {
  color: #5b7abb;
  display: block;
  text-decoration: none;
}

.service h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #56ceba;
  font-size: 1.3rem;
  margin: 1rem 0 0.6rem;
}

.services-grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.service {
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #e7e7e7;
  transition: all 0.3s ease;
}

.service:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
}

.service i {
  font-size: 3.45rem;
  margin: 1rem 0;
}

.service:nth-child(1) i,
.service:nth-child(1) h4,
.service:nth-child(1) .cta {
  color: #42b7ca;
}

.service:nth-child(1):hover {
  border: 2px solid #42b7ca;
}

.service:nth-child(2) i,
.service:nth-child(2) h4,
.service:nth-child(2) .cta {
  color: #425fca;
}

.service:nth-child(2):hover {
  border: 2px solid #425fca;
}

.service:nth-child(3) i,
.service:nth-child(3) h4,
.service:nth-child(3) .cta {
  color: #9c42ca;
}

.service:nth-child(3):hover {
  border: 2px solid #9c42ca;
}

.service > * {
  flex: 1 1 100%;
}

.service .cta {
  align-self: flex-end;
}

@media all and (max-width:900px) {
  .services-grid {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}
</style>
import React from 'react'
import Layout from '../components/Layout'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email format').required('Required'),
})

const NewsLetter = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I write to my friends every few weeks</h4>
          <form
            className="contact-form"
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <input
              {...register('name')}
              placeholder="Your name"
              className="form-control"
            />
            <p>{errors.name?.message}</p>
            <input
              {...register('email')}
              placeholder="Your email"
              className="form-control"
            />
            <p>{errors.email?.message}</p>
            <button type="submit" className="btn form-control">
              subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
